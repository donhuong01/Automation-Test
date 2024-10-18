const cypress = require('cypress');
const { exec } = require('child_process');

const memberIds = [
    // 'A100107119',
    // 'A100002265',
    // 'A100052638',
    // 'A100492618',
    // 'A200401878',
    // 'A200090048',
    // 'A100475425',
    // 'A100251495',
    // 'A100128101',
    // 'A200234846',
    // 'A200318137',
    // 'A100497387',
    // 'A200126726',
    // 'A200307652',
    'A100318946',
    'A100738814',
];


const specPath = 'cypress/e2e/Performance-test-2.8/ActivityEventRegistration.cy.js';

// Function to run Cypress tests using Cypress library
async function runTestsWithCypress(member_id) {
    console.log(`Running tests with Cypress for: ${member_id}`);
    try {
        const results = await cypress.run({
            spec: specPath,
            env: {
                member_id: member_id,
            },
            headless: true,
            exit: true,
        });

        if (results.totalFailed === 0) {
            console.log(`Tests passed for ${member_id}`);
            return 'Pass';
        } else {
            console.log(`Tests failed for ${member_id}`);
            return 'Fail';
        }
    } catch (error) {
        console.error(`Error running Cypress for ${member_id}:`, error);
        return 'Error';
    }
}

// Function to run Cypress tests using child_process as a fallback
function runTestsWithChildProcess(member_id) {
    console.log(`Running tests with child_process for: ${member_id}`);
    const command = `npx cypress run --spec "${specPath}" --env member_id=${member_id}`;

    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error running tests for ${member_id}:`, stderr);
                resolve('Error');
            } else {
                console.log(`Tests completed for ${member_id}`);
                // console.log(stdout);
                resolve(stdout.includes('All specs passed!') ? 'Pass' : 'Fail');
            }
        });
    });
}

// Function to run tests for multiple member_ids concurrently
async function runTestsAsync() {
    const promises = memberIds.map(async (member_id) => {
        // First try with Cypress library, fallback to child_process on error
        let result = await runTestsWithCypress(member_id);
        // if (result === 'Error') {
        //     console.log(`Falling back to child_process for ${member_id}`);
        //     result = await runTestsWithChildProcess(member_id);
        // }
        console.log(`Result for ${member_id}: ${result}`);
        return {
            'member_id': member_id,
            'result': result
        };
    });

    // Wait for all tests to complete
    const results = await Promise.all(promises);
    console.log('Final results:', results);
}

// Run tests for each user
runTestsAsync();

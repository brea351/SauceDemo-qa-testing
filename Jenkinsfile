pipeline {
    agent any 

    stages {
        stage('Run Cypress in Docker') {
            steps {
                bat """
                    docker run --rm ^
                    -v "%WORKSPACE%":/app ^
                    -w /app ^
                    --shm-size=2g ^
                    -e CYPRESS_VIDEO=false ^
                    -e ELECTRON_EXTRA_LAUNCH_ARGS="--no-sandbox" ^
                    cypress/included:15.0.0 npm run cy:report
                """
            }
        }

        stage('Publish Test Report') {
            steps {
                // 'allowEmptyResults: true' prevents the build from becoming unstable if a report is missing
                junit testResults: 'cypress/reports/junit/*.xml', allowEmptyResults: true
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/junit/*.xml, cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
        cleanup {
            // Cleans the workspace to save disk space on your Windows machine
            cleanWs()
        }
    }
}

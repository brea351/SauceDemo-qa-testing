pipeline {
    agent any 

    stages {
        stage('Run Cypress in Docker') {
            steps {
                // Ensure there is no space before the ^ at the end of the lines
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
                junit 'cypress/reports/junit/*.xml'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/reports/junit/*.xml, cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}

pipeline {
    agent any // Run on your Windows host directly

    stages {
        stage('Run Cypress in Docker') {
            steps {
                // We use 'bat' for Windows and manually map the current directory
                // '%WORKSPACE%' is the Windows path, which Docker Desktop translates for you
                bat """
                    docker run --rm -v "%WORKSPACE%":/app -w /app cypress/included:15.0.0 npm run cy:report
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
            // This now works because it is inside the 'node' context of 'agent any'
            archiveArtifacts artifacts: 'cypress/reports/junit/*.xml, cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
    }
}

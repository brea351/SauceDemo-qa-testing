pipeline {
    agent {
        docker {
            image 'cypress/included:15.0.0'
            // FIX: Use a Linux-style path for the workspace inside the container
            // and pass the -u 0:0 to ensure root permissions for npm install
            args '-u 0:0 --entrypoint=""'
        }
    }

    stages {
        stage('Build and Run Tests') {
            steps {
                // Using 'sh' works inside the Linux-based Cypress container
                sh '''
                    # Force clean install to avoid cache issues
                    npm ci || npm install 
                    
                    # Run tests using your specific package.json script
                    npm run cy:report
                '''
            }
        }

        stage('Publish Test Report') {
            steps {
                // This stays the same to show results in Jenkins UI
                junit 'cypress/reports/junit/*.xml'
            }
        }
    }

    post {
        always {
            // Updated to also archive screenshots for debugging UI failures
            archiveArtifacts artifacts: 'cypress/reports/junit/*.xml, cypress/screenshots/**/*.png', allowEmptyArchive: true
        }
        success {
            echo '✅ All Cypress tests passed!'
        }
        failure {
            echo '❌ Cypress tests failed. Check the screenshots and JUnit report.'
        }
    }
}

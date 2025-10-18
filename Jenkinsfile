pipeline {
    agent {
        // Use the official Cypress Docker image for a reliable test environment
        docker {
            image 'cypress/included:15.0.0'
            // FIX: Override the default ENTRYPOINT to allow Jenkins to execute shell commands
            args '--entrypoint=""' 
        }
    }

    stages {
        stage('Clone Repository') {
            steps {
                // Clones the repo configured in your job settings
                checkout scm 
            }
        }

        stage('Build and Run Tests') {
            steps {
                // Install dependencies and run Cypress tests inside the container
                sh '''
                    # Install dependencies (using npm install as per your original file)
                    npm install 
                    
                    # Run Cypress tests and generate JUnit report (using your script name)
                    npm run cy:report
                '''
            }
        }

        stage('Publish Test Report') {
            steps {
                // Publish JUnit report for Jenkins dashboard
                junit 'cypress/reports/junit/*.xml'
            }
        }
    }

    post {
        always {
            // Archive the raw JUnit XML report
            archiveArtifacts artifacts: 'cypress/reports/junit/*.xml', allowEmptyArchive: true
        }
        success {
            echo '✅ All Cypress tests passed!'
        }
        failure {
            echo '❌ Cypress tests failed. Check the Jenkins test report.'
        }
    }
}

pipeline {
    agent any

    tools {
        nodejs 'NodeJS22' // name you set in Jenkins NodeJS tool
    }

    environment {
        // Optional: set environment variables here if needed
        PATH = "${tool 'NodeJS22'}\\node_modules\\.bin;${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/brea351/SauceDemo-qa-testing'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                bat 'npx cypress run'
            }
        }

        stage('Post Test Results') {
            steps {
                // Optional: archive screenshots/videos if needed
                archiveArtifacts artifacts: 'cypress/screenshots/**/*, cypress/videos/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished'
        }
        success {
            echo 'Tests passed successfully!'
        }
        failure {
            echo 'Some tests failed.'
        }
    }
}


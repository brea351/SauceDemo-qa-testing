pipeline {
    agent any

    tools {
        nodejs 'Node' // Make sure this is the exact NodeJS tool name in Jenkins
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/brea351/SauceDemo-qa-testing.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

        stage('Archive Test Artifacts') {
            steps {
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

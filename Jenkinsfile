pipeline {
    agent any

    tools {
        nodejs 'Node' 
    }

    stages {
        stage('clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/brea351/SauceDemo-qa-testing.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npm run cy:report'
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

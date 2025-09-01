pipeline {
    agent any

    tools {
        // Name must match what you configured in Jenkins NodeJS tool
        nodejs 'NodeJS22'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/brea351/SauceDemo-qa-testing'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Optional: only if you have a build script
                sh 'npm run build || echo "No build script found, skipping..."'
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

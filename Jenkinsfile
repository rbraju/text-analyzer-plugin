pipeline {
    agent any

    tools {
        nodejs 'NodeJS 18.20.8'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                sh 'node -v'
                sh 'npm -v'
            }
        }

        stage('Install Quality Gate') {
            steps {
                sh 'npm install -g quality-gates-platform'
            }
        }

        stage('Run Quality Gate') {
            steps {
                sh '''
                    qgate src
                '''
            }
        }
    }

    post {
        failure {
            echo "Quality Gate Failed!!!"
        }
        success {
            echo "Quality Gate Passed!"
        }
    }
}
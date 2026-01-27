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

        stage('Run Quality Gate') {
            steps {
                sh '''
                    # Clone quality-gates-platform
                    git clone https://github.com/rbraju/quality-gates-platform.git quality-gate
                    cd quality-gate
                    npm ci
                    npm run build || echo 'No build step'

                    # Run CLI using local node and entry file
                    node dist/index.js $WORKSPACE/src
                '''
            }
        }

        stage('Archive Report') {
            steps {
                archiveArtifacts artifacts: 'violations.json', allowEmptyArchive: true
            }
        }
    }

    post {
        always {
            echo "Cleaning workspace..."
            deleteDir()
        }
        failure {
            echo "❌ Quality Gate Failed! Check violations.json for details"
        }
        success {
            echo "✅ Quality Gate Passed!"
        }
    }
}
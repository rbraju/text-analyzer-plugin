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
                    npm run build

                    # Make the CLI available globally in this session
                    npm link

                    # Run the CLI
                    qgate $WORKSPACE/src
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
pipeline {
  agent any
    stages {
        stage('clone') {
            steps {
                git branch: 'master', url:'https://github.com/Prashanth7993/crud-nodejs-mysql-test-2.git'
            }
        }
        stage('Build Image & Push into Docker hub'){
            steps{
                 sh 'docker build -t frontend .'
                 echo "Docker image build sucessfully completed."
                    withCredentials([usernamePassword(credentialsId: 'Docker_Hub_Credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                        sh 'docker tag frontend $DOCKER_USER/nodejs-mock-test-2:v2'
                        sh 'docker push $DOCKER_USER/nodejs-mock-test-2:v2'
                    }
            }
        }    
    }
}

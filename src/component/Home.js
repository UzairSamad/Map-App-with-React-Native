import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'

class Home extends Component {

    state = {
        isData: false,
        quiz: [],
        currentQuestion: "",
        correctAnswers: [],
        questionToDisplay: 0,
        userAnswer: 0,
        nextButton: true,
        quizScreen: true,
        data: false,
        time: {
            minutes: 0,
            second: 0
        },
        options: [],
        score: 0
    };

    componentDidMount

    getData = async () => {
        let rawData = await fetch(
            "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
        );
        let data = await rawData.json();
        console.log('This is data in get data function', data)
        this.setState({ quiz: data.results });
        console.log('quiz in state', this.state.quiz);

        // adding correct answer into a new array of state......
        let correctAnswersArray = [];
        this.state.quiz.map((item, index) => {
            correctAnswersArray.push(this.state.quiz[index].correct_answer);
        });
        this.setState({ correctAnswers: correctAnswersArray });

        console.log("Correctanswer in state", this.state.correctAnswers);
        this.setState({ isData: true });
        {
            this.state.isData && this.displayQuestion();
        }
    }

    displayQuestion = () => {
        const { quiz, questionToDisplay, userAnswer, score } = this.state;
        const currentQuestion = quiz[questionToDisplay].question;
        let optionsList = quiz[questionToDisplay].incorrect_answers;
        optionsList.push(quiz[questionToDisplay].correct_answer);
        console.log("op => 0", optionsList);
        // console.log("test => ", test);

        const options = optionsList.map((op, index) => ({
            label: op,
            value: index
        }));
        if (options[userAnswer].label === quiz[questionToDisplay].correct_answer) {
            this.setState({ score: score + 10 });
        }
        this.setState({ currentQuestion, options });
        console.log(currentQuestion);


    };

    handleNext = () => {
        let { questionToDisplay, quiz } = this.state;
        if (questionToDisplay < quiz.length) {
            this.setState({ questionToDisplay: questionToDisplay + 1 }, () => {
                this.displayQuestion();
            });
        } else {
            this.setState({ currentQuestion: "Finished" });
        }
    }

    //making options for radio buttons.....
    optionsForRadioButton = [];
    makeOptions = () => {
        this.state.questionToDisplay[0].incorrect_answers.map((name, key) => {
            optionsForRadioButton.push({ label: name, value: key });
        });
    };



    render() {
        console.log(this.props)
        return (
            <View >
                {!this.state.isData && <Button title='Start Quiz' onPress={this.getData} />}
                {this.state.isData && <Text>{this.state.questionToDisplay + 1} {this.state.currentQuestion}</Text>}
                {this.state.isData && <Button title='Next' onPress={this.handleNext} />}
                


                {/* <TouchableOpacity  style={{backgroundColor:'black',width:80,height:50,marginLeft:150,marginTop:30,borderRadius:3}}>
                    <Text style={{color:'white',display:'flex',padding:8}}>Press me</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}

export default Home
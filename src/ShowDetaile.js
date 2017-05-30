import React, { Component } from 'react';
import { View,Text,TouchableOpacity,ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'
import getPeopleFromApi from '../actions/';

class ShowDetail extends Component{
    constructor(props){
        super(props);
    }
    render() {
        const { isFetching,people } = this.props.people;
        console.log(people);
        return(
            <View style={{marginTop: 100,paddingLeft: 30,paddingRight: 30}} > 
                <Text>Redux Ex</Text>
                <TouchableOpacity onPress={this.props.getPeople} style={{height: 50,backgroundColor: 'blue',justifyContent: 'center',alignItems: 'center'}} >
                    <Text style={{color: 'white'}} >Press Me</Text>
                </TouchableOpacity>
                { isFetching && <ActivityIndicator /> }
                {
                    people.map((person,index)=>{
                        return(
                            <View key={index}>
                                <Text> Name: {person.name}</Text>
                                <Text> Gender: {person.gender}</Text>
                            </View>
                        );
                        
                    })
                }
            </View>
        );

    }
}

mapStateToProps = (state) => {
    return {
        people: state.people
    }
}

mapDispatchToProps = (dispatch) => {
    return {
         getPeople:() => {dispatch(getPeopleFromApi())}
    }
   
}


export default connect(mapStateToProps,mapDispatchToProps) (ShowDetail);
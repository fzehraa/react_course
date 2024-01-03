import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class CategoryList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         categories: [
    //             { categoryId: 1, categoryName: "Beverages" },
    //             { categoryId: 2, categoryName: "Meals" },
    //             { categoryId: 3, categoryName: "Deserts" }
    //         ],
    //     }
        
    // }

    state = {
        categories: []
    };

    componentDidMount(){//component yerleşti gibi bişey demek
        this.getCategories();
    }

    getCategories = () =>{
        fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(datamiz=>this.setState({categories:datamiz}));
    }
    
    render() {
        return (
            <div>
                <h3>{this.props.infoo.title}</h3>
                <ListGroup>
                    {
                        this.state.categories.map(category => (
                            <ListGroupItem onClick={()=>{
                                this.props.changeCategory(category);
                            }} key={category.id}>{category.id} - {category.categoryName}</ListGroupItem>
                        ))
                    }
                </ListGroup>
                <h4>{this.props.currentCategory}</h4>
            </div>
        )
    }
}
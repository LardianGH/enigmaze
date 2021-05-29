import React, { Component } from "react";
import TestCard from "../components/TestCard";
import Wrapper from "../components/Wrapper"

import entities from "../assets/entities.json";

class CombatView extends Component {

    state = {
        entities
    };

    render() {
        return ( 
        <Wrapper>

        {this.state.entities.map(entity => (
            <TestCard
            key={entity.id}
            type={entity.type}
            name={entity.name}
            condition={entity.condition}
            limbCondition={entity.limbCondition}
            guard={entity.guard}
            brawn={entity.brawn}
            //weapon from seperate source
            />
        ))}

</Wrapper>
            
        );
    }
}

export default CombatView;
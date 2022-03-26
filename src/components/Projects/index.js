import React from "react";
import ProjectList from '../ProjectList';




function Projects(props) {
    const { currentCategory } = props;
    return (
        <section>
            <h1 data-testid="h1tag">{currentCategory.name}</h1>
            <ProjectList category={currentCategory.name} />
        </section>
    );
}


export default Projects;
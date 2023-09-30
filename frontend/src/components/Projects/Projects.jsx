import React from 'react';
import "./Projects.css";
import { Button, Typography } from '@mui/material';
import { AiOutlineProject } from "react-icons/ai";
import { FaRegSmileWink } from "react-icons/fa";
import { Delete } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { deleteProject, getUser } from '../../actions/user';

export const ProjectCard = ({ url, projectImage, projectTitle, description, technologies, isAdmin = false, id }) => {

    const dispatch = useDispatch();

    const deleteHandler = async (id) => {
        await dispatch(deleteProject(id));
        dispatch(getUser());
    };
    return (
        <>
            <a href={url} className="projectCard" target="black">
                <div>
                    <img src={projectImage} alt="project" />
                    <Typography variant="h5">{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant="h4">About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant="h6">Tech Stack: {technologies}</Typography>


                </div>
            </a>

            {isAdmin && (
                <Button style={{ color: "rgba(255, 128, 234, 1)" }} onClick={() => deleteHandler(id)}>
                    <Delete />
                </Button>
            )}
        </>
    )
}

const Projects = ({ projects }) => {
    return (
        <div className='projects'>
            <Typography variant='h3'>Projects <AiOutlineProject /></Typography>

            <div className="projectsWrapper">
                {projects.map((item) => (
                    <ProjectCard
                        id={item._id}
                        key={item._id}
                        url={item.url}
                        projectImage={item.image.url}
                        projectTitle={item.title}
                        description={item.description}
                        technologies={item.techStack}
                    />
                ))}
            </div>

            <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
                All the Projects are shown above, that are made by me. <FaRegSmileWink />
            </Typography>

        </div>
    );
};

export default Projects
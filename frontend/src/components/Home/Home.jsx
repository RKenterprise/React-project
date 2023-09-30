import React from "react";
import { useEffect } from "react";
import "./Home.css";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TimeLine from "../TimeLine/TimeLine";
import {
    SiReact,
    SiJavascript,
    SiAngular,
    SiNodedotjs,
    SiMongodb,
    SiExpress,
    SiThreedotjs,
    SiHtml5,
    SiCplusplus
} from "react-icons/si";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, skills }) => {
    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();

        //for moon texture image
        const moonTexture = textureLoader.load(moonImage);
        //for venus texture image
        const venusTexture = textureLoader.load(venusImage);
        //for space texture image
        const spaceTexture = textureLoader.load(spaceImage);

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(4, 4, 8);


        const canvas = document.querySelector(".homeCanvas");
        const renderer = new THREE.WebGLRenderer({ canvas });

        //for moon geometry
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        const moongeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moongeometry, moonmaterial);

        //for venus geometry
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        const venusgeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusgeometry, venusmaterial);
        venus.position.set(8, 5, 5);


        // for pointlight
        const pointLight = new THREE.PointLight(0xffffff, 1);
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
        // pointLight.position.z += 10;
        pointLight.position.set(8, 5, 5);
        pointLight2.position.set(-8, -5, -5);

        // const lightHelpher = new THREE.PointLightHelper(pointLight);


        // for object control
        // const controls = new OrbitControls(camera, renderer.domElement);

        // for all shown objects on screen
        //scene.add(lightHelper);
        scene.add(moon);
        scene.add(venus);
        scene.add(pointLight);
        scene.add(pointLight2);
        scene.background = spaceTexture;


        //Event listner
        const constSpeed = 0.01;
        window.addEventListener("mousemove", (e) => {
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }

            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            if (e.clientY <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        })


        const animate = () => {
            requestAnimationFrame(animate);

            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scene, camera);

        }

        animate();

        return window.addEventListener("scroll", () => {
            camera.rotation.z = window.scrollY * 0.001;
            camera.rotation.y = window.scrollY * 0.003;

            const skillsBox = document.getElementById("homeSkillsBox");

            if (window.scrollY > 1500) {
                skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
            } else {
                skillsBox.style.animationName = "homeSkillsBoxAnimationOff";

            }
        });

    }, []);

    return <div className="home">


        <canvas className="homeCanvas"></canvas>

        <div className="homeCanvasContainer">
            <Typography variant="h1">
                <p>V</p>
                <p>I</p>
                <p>K</p>
                <p>A</p>
                <p>S</p>
                <p>H</p>


                {/* <p>W</p>
                <p>i</p>
                <p>n</p>
                <p>Z</p>
                <p>a</p>
                <p>i</p>
                <p>g</p>
                <p>s</p> */}

            </Typography>
             
            <div className="homeCanvasBox">
                <Typography variant="h2">FULL STACK</Typography>
                <Typography variant="h2">DEVELOPER</Typography>

            </div>

            <Link to="/projects">VIEW WORKS</Link>


        </div>

        <div className="homeScrolBtn">
            <MouseOutlined/>
        </div>


        <div className="homeContainer">

            <Typography variant="h3">TIMELINE</Typography>
            <TimeLine timelines={timelines} />

        </div>

        <div className="homeSkills">
            <Typography variant="h3">SKILLS</Typography>

            <div className="homeCubeSkills">
                <div className="homeCubeSkillsFaces homeCubeSkillsFace1" >
                    <img src={skills.image1.url} alt="face1" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace2" >
                    <img src={skills.image2.url} alt="face2" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace3" >
                    <img src={skills.image3.url} alt="face3" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace4" >
                    <img src={skills.image4.url} alt="face4" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace5" >
                    <img src={skills.image5.url} alt="face5" />
                </div>

                <div className="homeCubeSkillsFaces homeCubeSkillsFace6" >
                    <img src={skills.image6.url} alt="face6" />
                </div>

            </div>

            <div className="cubeShadow"></div>

            <div className="homeSkillsBox" id="homeSkillsBox">
                <SiReact />
                <SiJavascript />
                <SiAngular />
                <SiNodedotjs />
                <SiMongodb />
                <SiExpress />
                <SiThreedotjs />
                <SiHtml5 />
                <SiCplusplus />

            </div>
        </div>

    </div>;
};

export default Home;
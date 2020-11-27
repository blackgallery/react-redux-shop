import React,{Fragment} from 'react';
import Layout from "../Layouts/index";
import CardIteam from "../components/Card/index";

const HomePage = () => {
    return (
        <Fragment>
            <Layout>
                <div className="home-container"> 
                     <CardIteam />
                </div>
            </Layout>
        </Fragment>
    );
};

export default HomePage;
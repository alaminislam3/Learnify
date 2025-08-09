import React from 'react';
import Hero from '../Components/Hero';
import ArticleCard from '../Components/ArticleCard';
import CategoryList from '../Components/CategoryList';
import Community from '../Components/Community';
import Resources from '../Components/Resources';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className='container mx-auto px-6 sm:px-6 md:px-12 lg:px-24'>

            <ArticleCard></ArticleCard>
            <CategoryList></CategoryList>
            <Community></Community>
            <Resources></Resources>
            </div>
        </div>
    );
};

export default Home;
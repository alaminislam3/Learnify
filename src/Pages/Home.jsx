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
            <ArticleCard></ArticleCard>
            <CategoryList></CategoryList>
            <Community></Community>
            <Resources></Resources>
        </div>
    );
};

export default Home;
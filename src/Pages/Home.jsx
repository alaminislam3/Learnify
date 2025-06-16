import React from 'react';
import Hero from '../Components/Hero';
import ArticleCard from '../Components/ArticleCard';
import CategoryList from '../Components/CategoryList';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <ArticleCard></ArticleCard>
            <CategoryList></CategoryList>
        </div>
    );
};

export default Home;
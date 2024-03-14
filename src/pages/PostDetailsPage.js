import React, { Fragment } from "react";
import Heading from "../components/Layout/heading";
import PostItem from "../modules/post/PostItem";
import PostImage from "../modules/post/PostImage_Otm";
import PostCategory from "../modules/post/PostCategory_Otm";
import PostTitle from "../modules/post/PostTitle_Otm";
import PostInfo from "../modules/post/PostInfo_Otm";
import Layout from "../components/Layout/layout";

const PostDetailsPage = () => {
  return (
    <Layout>
      <div className="feature-container">
        <div class="post-header flex justify-between">
          <div class="post-img">
            <PostImage src="/laptop_room.jpg" alt="logo"></PostImage>
          </div>
          <div class="post-info leading-loose">
            <PostCategory className="bg-newpost">Kiến thức</PostCategory>
            <PostTitle className="text-2xl">
              {" "}
              Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
            </PostTitle>
            <PostInfo authorName="Andy" date="Mar 23"></PostInfo>
          </div>
        </div>

        <div className="post-content m-5 leading-8">
          <div className="entry-content">
            <h2 className="font-bold text-4xl">Chương 1</h2>
            <p>
              Gastronomy atmosphere set aside. Slice butternut cooking home.
              Delicious romantic undisturbed raw platter will meld. Thick
              Skewers skillet natural, smoker soy sauce wait roux. slices Food
              qualities braise chicken cuts bowl through slices butternut snack.
              Tender meat juicy dinners. One-pot low heat plenty of time adobo
              fat raw soften fruit. sweet renders bone-in marrow richness
              kitchen, fricassee basted pork shoulder. Delicious butternut
              squash hunk. Flavor centerpiece plate, delicious ribs bone-in
              meat, excess chef end. sweet effortlessly pork, low heat smoker
              soy sauce flavor meat, rice fruit fruit. Romantic
              fall-off-the-bone butternut chuck rice burgers. renders aromatic
              enjoyment, then slices taco. Minutes undisturbed cuisine lunch
              magnificent mustard curry. Juicy share baking sheet pork. Meals
              ramen rarities selection, raw pastries richness magnificent
              atmosphere. Sweet soften dinners, cover mustard infused skillet,
              Skewers on culinary experience.
            </p>

            <p>
              Juicy meatballs brisket slammin' baked shoulder. Juicy smoker soy
              sauce burgers brisket. polenta mustard hunk greens. Wine technique
              snack skewers chuck excess. Oil heat slowly. slices natural
              delicious, set aside magic tbsp skillet, bay leaves brown
              centerpiece. fruit soften edges frond slices onion snack pork
              steem on wines excess technique cup; Cover smoker soy sauce fruit
              snack. Sweet one-dozen scrape delicious, non sheet raw crunch
              mustard. Minutes clever slotted tongs scrape, brown steem
              undisturbed rice.
            </p>

            <p>
              Food qualities braise chicken cuts bowl through slices butternut
              snack. Tender meat juicy dinners. One-pot low heat plenty of time
              adobo fat raw soften fruit. sweet renders bone-in marrow richness
              kitchen, fricassee basted pork shoulder. Delicious butternut
              squash hunk. Flavor centerpiece plate, delicious ribs bone-in
              meat, excess chef end. sweet effortlessly pork, low heat smoker
              soy sauce flavor meat, rice fruit fruit. Romantic
              fall-off-the-bone butternut chuck rice burgers.
            </p>
            <figure className="flex flex-col items-center my-3">
              <img
                src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
                className="w-50 h-96 object-cover rounded-lg"
              />
              <figcaption className="text-gray-500">
                Gastronomy atmosphere set aside. Slice butternut cooking home.
              </figcaption>
            </figure>
            <h2 className="text-center font-bold text-4xl">Chương 2</h2>
            <p>
              Gastronomy atmosphere set aside. Slice butternut cooking home.
              Delicious romantic undisturbed raw platter will meld. Thick
              Skewers skillet natural, smoker soy sauce wait roux. slices Food
              qualities braise chicken cuts bowl through slices butternut snack.
              Tender meat juicy dinners. One-pot low heat plenty of time adobo
              fat raw soften fruit. sweet renders bone-in marrow richness
              kitchen, fricassee basted pork shoulder. Delicious butternut
              squash hunk. Flavor centerpiece plate, delicious ribs bone-in
              meat, excess chef end. sweet effortlessly pork, low heat smoker
              soy sauce flavor meat, rice fruit fruit. Romantic
              fall-off-the-bone butternut chuck rice burgers. renders aromatic
              enjoyment, then slices taco. Minutes undisturbed cuisine lunch
              magnificent mustard curry. Juicy share baking sheet pork. Meals
              ramen rarities selection, raw pastries richness magnificent
              atmosphere. Sweet soften dinners, cover mustard infused skillet,
              Skewers on culinary experience.
            </p>
          </div>
          <div className="author bg-newpost  rounded-lg flex mx-5">
            <div className="author-image">
              <img
                src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                alt=""
                className="w-96 h-52 rounded-xl object-cover"
              />
            </div>
            <div className="author-content p-5">
              <h3 className="author-name text-xl font-bold">Khoalee</h3>
              <p className="author-desc">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos non animi porro voluptates quibusdam optio nulla
                quis nihil ipsa error delectus temporibus nesciunt, nam officiis
                adipisci suscipit voluptate eum totam!
              </p>
            </div>
          </div>
        </div>
        <Heading>Bài viết liên quan</Heading>
        <div className="grid grid-cols-4">
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
          <PostItem></PostItem>
        </div>
      </div>
    </Layout>
  );
};
export default PostDetailsPage;

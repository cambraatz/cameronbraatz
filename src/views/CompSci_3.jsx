import React from "react";

import Header from "../components/Header"
import Footer from '../components/Footer';
import PortfolioEntry from "../components/PortfolioEntry";
import LinksArray from "../components/Links";

import LC_Overview from '../assets/compsci/landcover_overview.png';
import LC_Data from '../assets/compsci/landcover_data.png';
import LC_Types from '../assets/compsci/landcover_types.png';
import LC_prelim_perform from '../assets/compsci/landcover_performance_stand.png';
import LC_aug_perform from '../assets/compsci/landcover_performance_aug.png';
import LC_distro from '../assets/compsci/landcover_distribution.png';
import LC_augmentations from '../assets/compsci/landcover_augmentations.png';
import LC_predictions from '../assets/compsci/landcover_predictions.png';
import LC_tiling from '../assets/compsci/landcover_tiling.png';

import styles from '../styles/Portfolio.module.css';

const LC0_params = {
    header: "land cover segmentation",
    subheader: "machine learning",
    color: "#fffff",
    body1: "developed while studying at cu-boulder, this project prepares and trains a machine learning model to perform multi-class segmentation to predict land cover types from a set of satellite images.",
    body2: "traditionally accomplished through time-intensive manual inspection of aerial/satellite imagery, this model strives to accurately predict urban, agricultural, rangeland, forest, water, and barren land covers.",
    body3: null,
    figure1: LC_Overview,
    figure2: null,
    alt: "land cover figure 1.0",
    caption: "project overview"
};
const LC1_params = {
    header: null,
    subheader: "training/validation data",
    color: "#CBDCF4",
    body1: "trained and validated using the deepglobe land cover classification dataset, comprised of 803 labeled images and masks (additional unlabeled images for scoring).",
    body2: "the model predicts land covers from satellite imagery, measuring it's performance by comparing predicted land cover masks to their 'true' overlay masks. see below for a sample of the training/validation data.",
    body3: null,
    figure1: LC_Data,
    figure2: null,
    alt: "land cover figure 1.1",
    caption: "training and validation comparison"
};
const LC2_params = {
    header: null,
    subheader: "land cover types",
    color: "white",
    body1: "the seven types of land cover can be seen in the array below, image thumbnails were chosen for clear exhibition of their respective land covers.",
    body2: null,
    body3: null,
    figure1: LC_Types,
    figure2: null,
    alt: "land cover figure 1.2",
    caption: "land cover types"
};
const LC3_params = {
    header: null,
    subheader: "initial performance",
    color: "white",
    body1: "the first iteration entailed separating the training images into training/validation sets and training and testing the model on the unedited satellite images, aside from downsizing the images to avoid performance degradation.",
    body2: "preliminary testing shows promise, but the variability of the learning progress (seen in the graph below) is concerning. this could suggest the propensity for overfitting, or learning the training data too well.",
    body3: null,
    figure1: LC_prelim_perform,
    figure2: null,
    alt: "land cover figure 1.3",
    caption: "initial model performance"
};
const LC4_params = {
    header: null,
    subheader: null,
    color: "white",
    body1: null,
    body2: null,
    body3: null,
    figure1: LC_distro,
    figure2: null,
    alt: "land cover figure 1.4",
    caption: "training data distribution"
};
const LC5_params = {
    header: null,
    subheader: "initial reflection",
    color: "white",
    body1: "by analyzing the land cover distribution across our training data, we see that the images used for training are heavily dominated by agricultural land (roughly 57% of all pixels).",
    body2: "while this may allow a model to form a successful prediction strategy by over predicting agricultural land, this should not be a concern unless out model struggled to improve much past 57% accuracy.",
    body3: null,
    figure1: null,
    figure2: null,
    alt: null,
    caption: null
};
const LC6_params = {
    header: null,
    subheader: "model improvement",
    color: "white",
    body1: "despite a rich and diverse training set, a total of 803 images is still fairly small. this is not always a problem, but it usually can cause poor performance when the training data varies from the testing data.",
    body2: "one approach to boosting the diversity of our training set in image classification is to introduce image augmentations. while a slight change to an images brightness, contrast, rotation, etc. may not trick a human into thinking an image is totally unique...the same is not true for machine learning models.",
    body3: "given computers see images as matrices of pixels, each with a tuple of RGB color values, even small edits can trick a computer into thinking an image is totally new.",
    figure1: LC_augmentations,
    figure2: null,
    alt: "land cover figure 1.5",
    caption: "image augmentations"
};
const LC7_params = {
    header: null,
    subheader: "refined performance",
    color: "white",
    body1: "after introducing image augmentations, the model's learning curve gains significant consistency across the training/validation process.",
    body2: "the lack of significant accuracy gains is a minor concern, but could be due to the small sample size, inaccurate masks, etc. my hypothesis is that a combination of factors could be driving this performance ceiling.",
    body3: null,
    figure1: LC_aug_perform,
    figure2: null,
    alt: "land cover figure 1.6",
    caption: "refined model performance"
};
const LC8_params = {
    header: null,
    subheader: "visualizing predictions",
    color: "white",
    body1: "below are a set of images, model predicted masks and 'true' masks rendered side by side for comparison. note that the model consistently struggles to identify bodies of water, which inherently fluctuate drastically in their appearance.",
    body2: "in many cases, it appears that my model predicts with too fine an accuracy, often subdividing multiple land cover types within a monolithic land cover 'true' classification.",
    body3: null,
    figure1: LC_predictions,
    figure2: null,
    alt: "land cover figure 1.7",
    caption: "visualizing model predictions"
};
const LC9_params = {
    header: null,
    subheader: "reflections // continued development",
    color: "white",
    body1: "in studying the errors, i found numerous cases of over-generalized and misclassified land cover masks in our small training set. this adds potential for significant degradation in our model performance.",
    body2: "in the context of this project, further improvements in that area were outside of scope. if further development were to be done on a refined training set, i would focus on further image augmentations to further improve the model.",
    body3: "one such technique would be tiling, or subdividing full-size images prior to model training. this allows the model to run on full-size, full-resolution images by using numerous smaller partial images instead of singular, large format images that crash even the most powerful computers.",
    figure1: LC_tiling,
    figure2: null,
    alt: "land cover figure 1.8",
    caption: "image tiling"
};

const CompSci_0 = () => {
    return (
        <>
            <Header/>
            <span className="buffer"></span>
            <LinksArray page="compsci" />
            <PortfolioEntry id={styles.lc0} className={styles.lc} params={LC0_params} scroll={true}/>
            <PortfolioEntry id={styles.lc1} className={styles.lc} params={LC1_params}/>
            <PortfolioEntry id={styles.lc2} className={styles.lc} params={LC2_params}/>
            <PortfolioEntry id={styles.lc3} className={styles.lc} params={LC3_params}/>
            <PortfolioEntry id={styles.lc4} className={styles.lc} params={LC4_params}/>
            <PortfolioEntry id={styles.lc5} className={styles.lc} params={LC5_params}/>
            <PortfolioEntry id={styles.lc6} className={styles.lc} params={LC6_params}/>
            <PortfolioEntry id={styles.lc7} className={styles.lc} params={LC7_params}/>
            <PortfolioEntry id={styles.lc8} className={styles.lc} params={LC8_params}/>
            <PortfolioEntry id={styles.lc9} className={styles.lc} params={LC9_params}/>
            <span className="half_buffer"></span>
            <Footer page="/compsci/1" dest="rent to own"/>
        </>
    );
};

export default CompSci_0;
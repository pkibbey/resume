import React, { Component } from 'react';
import MdPool from 'react-icons/lib/md/pool';
import './Interests.css';
import SectionHeader from './SectionHeader';
import 'react-photoswipe/lib/photoswipe.css';
import { PhotoSwipeGallery } from 'react-photoswipe';

const items = [

  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Learning'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Having new experiences'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Traveling'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Having a higher level of conversation'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Being the best version of myself I can be'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Living outside of my comfort zone'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Challenging myself and the people that I care about'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Cycling and Snowboarding'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Making mixes of high energy electronic music'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Virtual Reality'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Science Fiction'
  },
  {
    src: 'photos/1.jpg',
    thumbnail: 'thumbnails/1.jpg',
    w: 1600,
    h: 900,
    title: 'Portrait Photography and Digital Manipulation'
  }
];

const options = {
  // http://photoswipe.com/documentation/options.html
};

const getThumbnailContent = (item) => {
  return (
    <img src={item.thumbnail} alt={item.title} />
  );
}

class Interests extends Component {
  render() {
    return (
      <div className="Section Interests">
        <SectionHeader
          icon={<MdPool className="Section__Icon" />}
          name='Interests'
        />
        <PhotoSwipeGallery
          items={items}
          options={options}
          thumbnailContent={getThumbnailContent}
        />
      </div>
    );
  }
}

export default Interests;

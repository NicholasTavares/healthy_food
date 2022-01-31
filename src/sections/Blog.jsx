import { useState, useRef } from 'react'
import Post from '../components/Post'
import blog_image_1 from '../img/blog_image_1.svg'
import blog_image_2 from '../img/bloco_image_2.svg'
import blog_image_3 from '../img/bloco_image_3.svg'
import blog_image_4 from '../img/bloco_image_4.svg'
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs'

const Blog = () => {

  const carousel = useRef(null)
  const [showRightButton, setShowRightButton] = useState(true)
  const [showLeftButton, setShowLeftButton] = useState(false)

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
    setShowRightButton(true)

    if (carousel.current.scrollLeft - carousel.current.offsetWidth <= 0) {
      setShowLeftButton(false)
    }
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
    setShowLeftButton(true)

    if (carousel.current.scrollLeft >= (carousel.current.scrollWidth - carousel.current.offsetWidth * 2)) {
      setShowRightButton(false)
    }
  };

  const posts = [
    {
      id: 1,
      title: 'Quick-start guide to nuts and seeds',
      author: 'Kevin Ibrahim',
      photo: blog_image_1
    },
    {
      id: 2,
      title: 'Nutrition: Tips for Improving Your Health',
      author: 'Mike Jackson',
      photo: blog_image_2
    },
    {
      id: 3,
      title: 'The top 10 benefits of eating healthy',
      author: 'Bryan McGregor',
      photo: blog_image_3
    },
    {
      id: 4,
      title: 'What you need to take care your healthy',
      author: 'Logan Kister',
      photo: blog_image_4
    },
    {
      id: 5,
      title: 'The top 10 benefits of eating healthy',
      author: 'Bryan McGregor',
      photo: blog_image_3
    },
    {
      id: 6,
      title: 'What you need to take care your healthy',
      author: 'Logan Kister',
      photo: blog_image_4
    },
    {
      id: 7,
      title: 'The top 10 benefits of eating healthy',
      author: 'Bryan McGregor',
      photo: blog_image_3
    },
    {
      id: 8,
      title: 'What you need to take care your healthy',
      author: 'Logan Kister',
      photo: blog_image_4
    },
  ]

  return (
    <section className='section-blog'>
      <div className="container section-blog__message">
        <h2>Read Our Blog</h2>
        <span>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </span>
      </div>
      <div className="container section-blog__posts-container" ref={carousel}>
        {posts && posts.map((post, i) => (
          <Post key={post.title + i} title={post.title} author={post.author} photo={post.photo} />
        ))}

        {showLeftButton && (
          <div className='container-arrow-left'>
            <BsArrowLeft onClick={handleLeftClick} />
          </div>
        )}

        {showRightButton && (
          <div className='container-arrow-right'>
            <BsArrowRight onClick={handleRightClick} />
          </div>
        )}
      </div>

    </section>
  )
}

export default Blog
import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthProvider';
const posts = [
  {
    id: 1,
    title: 'Industrial Training',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:6837056264283951104/',
    description:
      '“Just remember that your prospects are limitless and infinite, and they will take you wherever you want to go. Being a Supply Chain intern at JCB was one of the most significant and enriching parts of my professional journey and the support from Mr. Ashish Salkar sir was instrumental in bringing about the best out of this experience. I am immensely grateful for the same.”',
    date: 'Mar 16, 2022',
    datetime: '2022-03-16',
    category: { title: 'Associate Software Engineer', href: '#' },
    author: {
      name: 'Shriya Chaturvedi',
      role: 'ASE / Accenture',
      href: 'https://www.linkedin.com/in/shriya-chaturvedi/',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'Amazon Web Services',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7165827050740629506/',
    description:
      'Excited to announce that I have officially become a part of the Amazon Web Services (AWS) family as a Software Development Engineer! Following an amazing internship last summer, where I delved into cutting-edge technology and collaborated with some of the brightest minds, I am thrilled to be back at AWS full-time.',
    date: 'Mar 11, 2024',
    datetime: '2024-03-11',
    category: { title: 'App Developer', href: '#' },
    author: {
      name: 'Rajdev Kapoor',
      role: 'Developer - Designer / Amazon',
      href: 'https://www.linkedin.com/in/rajdevkapoor/',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 4,
    title: 'Generative AI',
    href: 'https://www.linkedin.com/in/keshavg2024/recent-activity/all/',
    description:
      'I am attending Fireside Chat with Will Grannis. Would you like to attend? Developers, get ready to embrace Generative AI. Learn how it can increase productivity and open new doors of opportunity in your career.',
    date: 'Feb 1, 2023',
    datetime: '2023-02-1',
    category: { title: 'ML & Web 3.0 Enthusiast', href: '#' },
    author: {
      name: 'Keshav Gupta',
      role: '3rd Year CSE Student / SmartIndiaHackathon Finalist',
      href: 'https://www.linkedin.com/in/keshavg2024/',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'From Campus to Corporate Life',
    href: 'https://www.linkedin.com/feed/update/urn:li:activity:7134457050545217536/',
    description:
      'Last week I was invited to share my odyssey from college to professional life with my fellow juniors at my alma mater Manipal University Jaipur. I took them on a ride back to 2018 and moved ahead until now. Delving into my pivotal internship in China I spoke about the challenges that I faced from building software to navigating a foreign land where the language was unfamiliar. But, oh, the rewards—lessons learned, friendships forged, and personal growth that I will cherish forever.',
    date: 'Nov 30, 2023',
    datetime: '2023-11-30',
    category: { title: 'Software Engineer', href: '#' },
    author: {
      name: 'Bhanvi Badyal',
      role: 'SE / DELL',
      href: 'https://www.linkedin.com/in/bhanvi-badyal/',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]

const Blog = () => {
  const {loading } = useContext(AuthContext);

  if(loading) {
    return <div className='text-center mt-28'>
      <Spinner aria-label="Center-aligned spinner example" />
    </div>
  }


  return (
    <div>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the community</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Connect with our esteemed community of dedicated seniors and alumni!
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
const forumLatest =
  'https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json';
const forumTopicUrl = 'https://forum.freecodecamp.org/t/';
const forumCategoryUrl = 'https://forum.freecodecamp.org/c/';
const avatarUrl = 'https://cdn.freecodecamp.org/curriculum/forum-latest';

const allCategories = {
  299: { category: 'Career Advice', className: 'career' },
  409: { category: 'Project Feedback', className: 'feedback' },
  417: { category: 'freeCodeCamp Support', className: 'support' },
  421: { category: 'JavaScript', className: 'javascript' },
  423: { category: 'HTML - CSS', className: 'html-css' },
  424: { category: 'Python', className: 'python' },
  432: { category: 'You Can Do This!', className: 'motivation' },
  560: { category: 'Backend Development', className: 'backend' }
};

function timeAgo(timeStamp){
  const now = new Date()
  const past = new Date(timeStamp)

  const diffMs = now - past
  const diffMinutes = Math.floor(diffMs / (1000 * 60))
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

  if (diffMinutes < 60) {
    return `${diffMinutes}m ago`
  } else if (diffHours < 24) {
    return `${diffHours}h ago`
  } else {
    return `${diffDays}d ago`
  }
}

function viewCount(views){
  if (views >= 1000) {
    return `${Math.floor(views / 1000)}k`
  } else {
    return views
  }
}


function forumCategory(categoryId){ 
  if (categoryId in allCategories) {
    const category = allCategories[categoryId]
    return `<a class="category ${allCategories.category}" ${category.className} href="${forumCategoryUrl}${category.className}/${categoryId}">${category.category}</a>`
  } else {
    return `<a class="category general" href="${forumCategoryUrl}/general/${categoryId}">General</a>`
  }
};

console.log(forumCategory(299))

const postArr = [
    { id: 1, user_id: 101, content: 'Hello!' },
    { id: 2, user_id: 102, content: 'Hi there!' },
    { id: 3, user_id: 101, content: 'Another post' }
];

const userArr = [
    { id: 101, name: 'Alice', avatar: 'https://example.com/alice.jpg' },
    { id: 102, name: 'Bob', avatar: 'https://example.com/bob.jpg' },
    { id: 103, name: 'Charlie', avatar: 'https://example.com/charlie.jpg' }
];

function avatars(postArr, userArr) {
  return postArr
    .map(post => {
      const user = userArr.find(user => user.id === post.user_id)

      let avatarSrc = user.avatar_template.replace('{size}', '30')

      if (!avatarSrc.startsWith('http')) {
        avatarSrc = `${avatarUrl}/${avatarSrc}`;
      }

      return `<img scr="${user.avatar}" alt="${user.name}" />`;
    })
    .join('')
}
console.log(avatars(postArr, userArr))


const data = {
    users: [
        { id: 101, name: 'Alice', avatar_template: '/avatars/alice_{size}.jpg' },
        { id: 102, name: 'Bob', avatar_template: '/avatars/bob_{size}.jpg' }
    ],
    topic_list: {
        topics: [
            {
                id: 1,
                title: 'How to learn JavaScript?',
                views: 1500,
                posts_count: 10,
                slug: 'how-to-learn-javascript',
                posters: [
                    { user_id: 101 },
                    { user_id: 102 }
                ],
                category_id: 1,
                bumped_at: '2025-01-15T10:30:00Z'
            },
            {
                id: 2,
                title: 'Best practices for async code',
                views: 2300,
                posts_count: 15,
                slug: 'best-practices-async',
                posters: [
                    { user_id: 102 }
                ],
                category_id: 2,
                bumped_at: '2025-01-16T08:00:00Z'
            }
        ]
    }
};
function showLatestPosts(data){
  const { users, topic_list } = data

  const { topics } = topic_list

  const tableRows = topics.map(topic => {
    const { id, title, views, posts_count, slug, posters, category_id, bumped_at} = topic

  const titleLink = `<a class-"post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>`
  const categoryLink = forumCategory(category_id);
  const td1 = `<td>${titleLink}${categoryLink}</td>`

  const avatarImages = avatars(posters, users) 
  const td2 = `<td><div class="avatar-container">${avatarImages}></div></td>`

  const replies = posts_count - 1;
  const td3 = `<td>${replies}</td>`

  const viewNum = viewCount(views)
  const td4 = `<td>${viewNum}</td>`

  const lastBump = timeAgo(bumped_at)
  const td5 = `<td>${lastBump}</td>`

  return `<tr>${td1}${td2}${td3}${td4}${td5}</tr>`

  });

  const postsContainer = document.getElementById('posts-container')
  postsContainer.innerHTML = tableRows.join('')
}

const fetchData = async() => {
  try {
    const res = await fetch(forumLatest)

    const data = await res.json()

     return showLatestPosts(data)
  } catch (err) {
    console.log(err)
  }
}
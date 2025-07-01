import '../../categories.styles.scss';

import Directory from '../../components/directory/directory.component'

const Home = () => {

  const categories = [
    { id: 1, title: 'Topi', imageUrl : 'https://th.bing.com/th/id/OIP.XhyA4INtPzLArRQNLiJrGgHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 2, title: 'Klambi', imageUrl : 'https://th.bing.com/th/id/OIP.XhyA4INtPzLArRQNLiJrGgHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 3, title: 'Katok', imageUrl : 'https://th.bing.com/th/id/OIP.XhyA4INtPzLArRQNLiJrGgHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 4, title: 'Sandal', imageUrl : 'https://th.bing.com/th/id/OIP.XhyA4INtPzLArRQNLiJrGgHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { id: 5, title: 'Sepatu', imageUrl : 'https://th.bing.com/th/id/OIP.XhyA4INtPzLArRQNLiJrGgHaEK?w=274&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' }
  ]

  return (
    <Directory categories={categories}/>
  );
}

export default Home;
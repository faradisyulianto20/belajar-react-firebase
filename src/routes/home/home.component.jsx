import '../../categories.styles.jsx';

// import Directory from '../../components/directory/directory.component'



import CategoryItem from "../../components/category-item/category-item.components"

import { CategoriesContext } from '../../contexts/categories.context';
import { useContext } from 'react';

const Home = () => {

  const { categoriesMap } = useContext(CategoriesContext);

  console.log(categoriesMap);

  

  return (
    <div className='flex flex-wrap gap-6 mx-4 my-6 items-center justify-center'>
      {Object.entries(categoriesMap).map(([category, items]) => {
        const firstImageUrl = items[0]?.imageUrl;

        return (
          <CategoryItem 
            key={category} 
            category={category} 
            firstImageUrl={firstImageUrl} 
          />
        );
      })}
         {/* <Directory categories={categories}/> */}
    </div>
  );
}

export default Home;
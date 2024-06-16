import CardList from "./components/cardList/CardList";
import CategoryList from "./components/categoryList/CategoryList";
import Featured from "./components/featured/Featured";
import Menu from "./components/menu/Menu";
import style from "./homepage.module.css";


export default function Home({searchParams}) {

  const page = parseInt(searchParams) || 1;
  console.log(page)

  return (
  <div className={style.container}>
    <Featured />
      <CategoryList />
      
      <div className={style.content}>
        <CardList page={page} />
        <Menu />
      </div>
 
  </div>
);
}

'use client';
import useStateStore from '@/store/stateStore';
import NavCatalogList from '@/components/nav-catalog/nav-catalog-list/nav-catalog-list';
import Button from '../ui/button/button';
import ButtonIcon from '@/components/ui/button-icon/button-icon';
import { Icons } from '@/components/ui/icons/icons';
import s from './mob-nav-catalog.module.scss';
import { getCategoryList } from '@/services/services';
import { useEffect, useState } from 'react';
const MobNavCatalog = () => {
  const { isMobCatalogVisible, toggleMobCatalogVisibility, toggleMobMenuVisibility} = useStateStore();
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategoryList();
        setCategories(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching category list:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={`${s.catalog} ${isMobCatalogVisible ? s.visible : ''}`}>
      <div className={s.navigation}>
        <Button onClick={toggleMobCatalogVisibility}>
          <Icons.arrowLeft size="small" />
          Меню
        </Button>

        <ButtonIcon customClass="light" size="medium" onClick={toggleMobCatalogVisibility}>
          <Icons.close size="medium" />
        </ButtonIcon>
      </div>

      <h2 className={s.title}>Каталог товарів</h2>

      <NavCatalogList categories={categories} handleClick={()=>{
        toggleMobCatalogVisibility();
        toggleMobMenuVisibility();
      }}/>
    </div>
  );
};

export default MobNavCatalog;

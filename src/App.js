import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Row, Col } from 'antd';
import './App.css';
import InsuranceSlider from './components/InsuranceSlider';

import { ReactComponent as Shield } from './icons/Shield.svg';
import { ReactComponent as Plus } from './icons/Plus.svg';
import { ReactComponent as Close } from './icons/Close.svg';
import { ReactComponent as SearchButton } from './icons/Search.svg';
import { ReactComponent as Sber } from './icons/Sber.svg';
import { ReactComponent as Edit } from './icons/Edit.svg';
import { ReactComponent as SortingArrow } from './icons/SortingArrow.svg';

const { Search } = Input;

const insuranceCompanies = ['Росгосстрах1', 'ВСК', 'Энергогарант', 'Росгосстрах2', 'ВСК', 'Энергогарант', 'Росгосстрах3', 'ВСК', 'Энергогарант', 'Росгосстрах4', 'ВСК', 'Энергогарант', 'Росгосстрах5', 'ВСК', 'Энергогарант', 'Росгосстрах6', 'ВСК', 'Энергогарант', 'Росгосстрах1', 'ВСК', 'Энергогарант', 'Росгосстрах2', 'ВСК', 'Энергогарант', 'Росгосстрах3', 'ВСК', 'Энергогарант', 'Росгосстрах4', 'ВСК', 'Энергогарант', 'Росгосстрах5', 'ВСК', 'Энергогарант', 'Росгосстрах6', 'ВСК', 'Энергогарант', 'Росгосстрах1', 'ВСК', 'Энергогарант', 'Росгосстрах2', 'ВСК', 'Энергогарант', 'Росгосстрах3', 'ВСК', 'Энергогарант', 'Росгосстрах4', 'ВСК', 'Энергогарант', 'Росгосстрах5', 'ВСК', 'Энергогарант', 'Росгосстрах6', 'ВСК', 'Энергогарант']

function App() {

  const [searchValue, setSearchValue] = useState('');


  const searchHandler = (props) => {
    const symbol = props.nativeEvent.data;

    if (symbol === null) {
      setSearchValue(searchValue.slice(0, -1));
    } else {
      setSearchValue(searchValue + symbol);
    }

  }

  return (
    <div className="App">
      <div className="container">
        <div className="insuranceCalculation__wrapper">
          <div className="insuranceCalculation">
            <p className="insuranceCalculation__title">Расчет страхования</p>
            <div className="insuranceCalculation__insuranceComponies">
              <div className="insuranceCalculation__insuranceComponies__header">
                <div className="insuranceCalculation__insuranceComponies__header__left">
                  <div className="insuranceCalculation__insuranceComponies__header__left__logo">
                    <Shield />
                  </div>
                  <p className="insuranceCalculation__insuranceComponies__header__left__text">Страховые компании</p>
                </div>
                <div className="insuranceCalculation__insuranceComponies__header__right">
                  <Button icon={<Plus />}>Добавить</Button>
                </div>
              </div>

              <div className="insuranceCalculation__insuranceComponies__search">
                <Search
                  placeholder="Введите название компании"
                  enterButton={<SearchButton />}
                  value={searchValue}
                  onChange={value => searchHandler(value)}
                  suffix={<Close className='insuranceCalculation__insuranceComponies__search__closeIcon'
                    onClick={() => setSearchValue('')} />}
                />
              </div>

              <InsuranceSlider content={insuranceCompanies} handler={setSearchValue} />
            </div>

            <div className="insuranceCalculation__selectBank">
              <div className="insuranceCalculation__selectBank__topBlock">
                <div className="insuranceCalculation__selectBank__topBlock__text">
                  <p className="insuranceCalculation__selectBank__topBlock__text__subtitle">Страховая компания</p>
                  <p className="insuranceCalculation__selectBank__topBlock__text__title">Ингосстарх</p>
                </div>
                <Button className="insuranceCalculation__selectBank__topBlock__button" icon={<Plus />}>Добавить банк</Button>
              </div>

              <div className="insuranceCalculation__selectBank__table">

                <div className="insuranceCalculation__selectBank__table__header">
                  <Row>


                      <div className="insuranceCalculation__selectBank__table__header__sort">
                        <SortingArrow />
                        <p>По умолчанию</p>
                      </div>


                    <Col offset={6} span={13}>
                      <div className="insuranceCalculation__selectBank__table__header__values">

                        <p className="insuranceCalculation__selectBank__table__header__values__item">Жизнь</p>

                        <p className="insuranceCalculation__selectBank__table__header__values__item">Квартира</p>

                        <p className="insuranceCalculation__selectBank__table__header__values__item">Дом</p>

                        <p className="insuranceCalculation__selectBank__table__header__values__item">Квартира + общая</p>

                        <p className="insuranceCalculation__selectBank__table__header__values__item">Доп. ставка</p>

                      </div>
                    </Col>
                  </Row>
                </div>

                <div className="insuranceCalculation__selectBank__table__item">
                  <Row>
                    <Col span={4}>
                      <span className="insuranceCalculation__selectBank__table__item__name">
                        <Sber />
                        <p>Сбербанк</p>
                      </span>
                    </Col>

                    <Col offset={2} span={13}>
                      <div className="insuranceCalculation__selectBank__table__item__values">

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.4</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                      </div>
                    </Col>

                    <Col offset={4}>
                      <Button className='insuranceCalculation__selectBank__table__item__editButton'><Edit /></Button>
                    </Col>

                  </Row>
                </div>

                <div className="insuranceCalculation__selectBank__table__item">
                  <Row>
                    <Col span={4}>
                      <span className="insuranceCalculation__selectBank__table__item__name">
                        <Sber />
                        <p>Сбербанк</p>
                      </span>
                    </Col>

                    <Col offset={2} span={13}>
                      <div className="insuranceCalculation__selectBank__table__item__values">

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.4</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                        <p className="insuranceCalculation__selectBank__table__item__values__item">0.15</p>

                      </div>
                    </Col>

                    <Col offset={4}>
                      <Button className='insuranceCalculation__selectBank__table__item__editButton'><Edit /></Button>
                    </Col>

                  </Row>
                </div>



              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

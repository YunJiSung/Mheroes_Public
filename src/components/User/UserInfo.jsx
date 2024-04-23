import timeAgo from '@/utils/timeAgo'
import React, { useState } from 'react'

const UserInfo = (props) => {
  const { basic, stat, guild, itemEquipment, titleEquipment, title } = props;
  const [tabMenu, setTabMenu] = useState('item');
  console.log(title)

  const findStat = (id) => {
    const item = stat?.stat.find((item) => item.stat_id === id);
    return item ? item.stat_value : '-';
  }

  if (!basic || basic?.length === 0) {
    return (
      <div className='user-info container'>
        <div className='noData'>
          <span>조회된 유저정보가 없습니다.</span>
          <span>유저명을 다시확인해주세요.</span>
        </div>
      </div>
    )
  }

  return (
    <section className='user-info container'>
      <div className='info-top'>
        <div className='job-img line30'>
          <div className='ch-Img tessa'>
          </div>
        </div>

        <div className='right'>
          <h2>
          {titleEquipment.title_equipment?.map(item => (
            <span key={item.id}>{item.title_name} </span>
          ))}{basic?.character_name}
          </h2>
          <div className='job line30'>{guild?.guild_name ?? '-'}</div>
          <div className='level line30'>경험치 {basic?.character_exp}</div>
          <div className='login line30'>마지막 로그인 {timeAgo(basic?.character_date_last_login)}</div>
        </div>
      </div>
      <div className='stat'>
        <span>공격력+{findStat("ATK")}</span>
        <span>마법공격력+{findStat("MATK")}</span>
        <span>ATK_Absolute+{findStat("ATK_Absolute")}</span>
        <span>공격속도+{findStat("ATK_Speed")}</span>
        <span>크리티컬 피해량+{findStat("Critical")}</span>
        <span>크리티컬+{findStat("CritFactor")}</span>
        <span>크리티컬 저항+{findStat("Res_Critical")}</span>
        <span>밸런스+{findStat("Balance")}</span>
        <span>대항력+{findStat("Immunity")}</span>
        <span>최대 생명력+{findStat("HP")}</span>
        <span>최대 스테미나+{findStat("STAMINA")}</span>
        <span>힘+{findStat("STR")}</span>
        <span>민첩+{findStat("DEX")}</span>
        <span>지능+{findStat("INT")}</span>
        <span>의지+{findStat("WILL")}</span>
        <span>행운+{findStat("LUCK")}</span>
        <span>방어력+{findStat("DEF")}</span>
        <span>HEAVY_LOAD+{findStat("HEAVY_LOAD")}</span>
        <span>MEDIUM_LOAD+{findStat("MEDIUM_LOAD")}</span>
        <span>TOWN_SPEED+{findStat("TOWN_SPEED")}</span>
        <span>공격력 제한 해제+{findStat("ATK_LimitOver ")}</span>
        <span>SKILL_RANK_SUM+{findStat("SKILL_RANK_SUM")}</span>
      </div>
      <div className='info-bottom'>
        <span>{basic?.character_class_name} 전용, </span>
        <span>{basic?.character_level} 레벨 이상 사용가능</span>
      </div>

      <div className='user-tabMenu'>
        <button className={`tabMnu ${tabMenu === 'item' ? 'active' : ''}`} type='button' value={'item'} onClick={(e) => setTabMenu(e.target.value)}>장비</button>
        <button className={`tabMnu ${tabMenu === 'title' ? 'active' : ''}`} type='button' value={'title'} onClick={(e) => setTabMenu(e.target.value)}>타이틀</button>
      </div>

      <div className={`user-item ${tabMenu === 'item' ? 'active' : ''}`}>
        <h3>장비</h3>
        <ul className='line30'>
          {
            itemEquipment.item_equipment?.filter(item => item.item_equipment_page === 'Bag')
              .map(item => (
                <li key={item.id}>
                  <span>{item.item_equipment_slot_name}</span> {/* 슬롯 이름 */}
                  <span>{item.item_name}</span> {/* 아이템 이름 */}
                </li>
              ))
          }
        </ul>
        <h3>캐시</h3>
        <ul className='line30'>
          {
            itemEquipment.item_equipment?.filter(item => item.item_equipment_page === 'Cash')
              .map(item => (
                <li key={item.id}>
                  <span>{item.item_equipment_slot_name}</span> {/* 슬롯 이름 */}
                  <span>{item.item_name}</span> {/* 아이템 이름 */}
                </li>
              ))
          }
        </ul>

      </div>
      <div className={`user-title ${tabMenu === 'title' ? 'active' : ''}`}>
        <h3>타이틀 <span>타이틀 <em>{title.title?.length}</em>랭크</span></h3>
        <ul className='line30'>
          {title.title?.map(item => (
            <li key={item.id}>{item.title_name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default UserInfo
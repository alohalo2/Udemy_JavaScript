const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  const newBonusLife = document.createElement("span"); // 새로운 <span> 요소 생성

  playerHealthBar.value = value;
  monsterHealthBar.value = value;
  
  newBonusLife.id = "bonus-life"; // 원래 ID 부여
  newBonusLife.textContent = "1"; // 원래 값 설정

  // 삭제되기 전 bonusLifeEl이 있던 부모 요소 찾기
  const playerHealthHeader = document.querySelector("h2"); // "PLAYER HEALTH" 헤더 찾기

  // 새로운 요소 추가 (원래 bonusLifeEl이 있던 위치)
  playerHealthHeader.appendChild(newBonusLife);
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

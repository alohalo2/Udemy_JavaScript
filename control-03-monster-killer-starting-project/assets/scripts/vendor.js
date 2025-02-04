const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

let bonusLifeParent;

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
    playerHealthBar.value = value;
    monsterHealthBar.value = value;

    if (hasBonusLife && bonusLifeParent) {
        const newBonusLife = document.createElement('span'); // 새로운 <span> 요소 생성

        newBonusLife.id = 'bonus-life'; // 원래 ID 부여
        newBonusLife.textContent = '1'; // 원래 값 설정

        // 기본적으로 "PLAYER HEALTH" h2에 추가
        const playerHealthHeader = document.querySelector('h2:nth-of-type(2)');
        if (playerHealthHeader) {
            playerHealthHeader.appendChild(newBonusLife);
        }
    } else {
        return;
    }
}

function removeBonusLife() {
    if (bonusLifeEl) {
        bonusLifeParent = bonusLifeEl.parentElement; // 원래 부모 요소 저장
        bonusLifeEl.remove(); // 요소 삭제
    }
}

function setPlayerHealth(health) {
    playerHealthBar.value = health;
}

// 全局变量
let currentTab = 'pending';

// 页面加载完成后执行
window.onload = function() {
  initTabs();
  loadData();
  initCardClick();
};

// 初始化卡片点击事件
function initCardClick() {
  const card = document.querySelector('.card');
  if (card) {
    card.addEventListener('click', function(e) {
      // 如果点击的是按钮，不跳转
      if (e.target.classList.contains('action-btn')) {
        return;
      }
      // 跳转到详情页
      window.location.href = 'detail.html';
    });
  }
};

// 初始化标签页
function initTabs() {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', function() {
      // 移除所有标签页的活动状态
      tabs.forEach(t => t.classList.remove('active'));
      // 添加当前标签页的活动状态
      this.classList.add('active');
      // 更新当前标签
      currentTab = this.dataset.tab;
      // 加载对应标签的数据
      loadData();
    });
  });
}

// 加载数据
function loadData() {
  // 这里可以根据当前标签调用API获取数据
  console.log('加载数据，当前标签：', currentTab);
  
  // 模拟数据加载
  setTimeout(() => {
    showToast(`加载${getTabName(currentTab)}数据成功`);
  }, 500);
}

// 获取标签名称
function getTabName(tab) {
  const tabNames = {
    pending: '待审批',
    approved: '已通过',
    rejected: '已驳回'
  };
  return tabNames[tab] || tab;
}



// 批量审批
function batchApprove() {
  showToast('批量审批');
  // 这里可以调用API处理批量审批逻辑
}

// 显示提示消息
function showToast(message) {
  // 创建提示元素
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  
  // 显示提示
  setTimeout(() => {
    toast.classList.add('show');
  }, 100);
  
  // 3秒后隐藏
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}

// 返回上一页
function goBack() {
  window.history.back();
}

// 响应式处理
function handleResize() {
  // 可以在这里添加响应式调整逻辑
  console.log('窗口大小变化');
}

// 监听窗口大小变化
window.addEventListener('resize', handleResize);
import * as THREE from "three";

// サイズを指定
let width = 1000;
let height = 800;

// レンダラーを作成
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#myCanvas"),
});
renderer.setSize(width, height);

// シーンを作成
const scene = new THREE.Scene();

// カメラを作成
const camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);
camera.position.set(0, 0, +1000);

// 球体を作成
const geometry = new THREE.SphereGeometry(300, 30, 30);
// 画像を読み込む
const loader = new THREE.TextureLoader();
const texture = loader.load('img/earthmap1k.jpg');
// マテリアルにテクスチャーを設定
const material = new THREE.MeshStandardMaterial({
  map: texture
});

// メッシュを作成
const mesh = new THREE.Mesh(geometry, material);
// 3D空間にメッシュを追加
scene.add(mesh);
// 平行光源
const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
directionalLight.position.set(1, 1, 1);
// シーンに追加
scene.add(directionalLight);

// 関数を作成して、widthとheightを更新する
function updateDimensions() {
  let widthInn = window.innerWidth;
  
  console.log(widthInn);
  if (widthInn < 500) {
    console.log("スマホ");
    return { width: 400, height: 320 };
  } else if (widthInn < 1023) {
    // タブレット
    console.log("タブレット");
    return { width: 700, height: 560 };
  } else {
    // PC
    console.log("PC");
    return { width: 1000, height: 800 };
  }
}

// ウィンドウのリサイズ時と初回読み込み時に関数を呼び出す
function handleResize() {
  const newSize = updateDimensions();
  // 更新後の値を外部の変数に反映
  width = newSize.width;
  height = newSize.height;

  // レンダラーのサイズを更新
  renderer.setSize(width, height);

  // カメラのアスペクト比を更新
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  // 外部の変数をコンソールに出力
  console.log(width, height);
}

// ウィンドウのリサイズ時に関数を呼び出す
window.addEventListener('resize', handleResize);

// 初回のデフォルト値を表示
handleResize();

tick();

// 毎フレーム時に実行されるループイベントです
function tick() {
  mesh.rotation.y += 0.01;
  renderer.render(scene, camera); // レンダリング

  requestAnimationFrame(tick);
}
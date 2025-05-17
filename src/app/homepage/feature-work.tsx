"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import christmasImg from "../../../public/Images/christmas.jpg"
import shopping from "../../../public/Images/Shopping.png"
import cardfloat from "../../../public/Images/cardfloat.png"
import fisheye from "../../../public/Images/fisheye.png"
import lusion from "../../../public/Images/lusion.png"
import ecctrl from "../../../public/Images/ecctrl.png"
import monitors from "../../../public/Images/monitors.png"
import banana from "../../../public/Images/banana.png"
import tshirts from "../../../public/Images/tshirts.png"
import caustics from "../../../public/Images/caustics.png"
import ssgi from "../../../public/Images/ssgi.png"
import cloud from "../../../public/Images/cloud.png"
import motion from "../../../public/Images/motion.png"
import room from "../../../public/Images/room.png"
import godray from "../../../public/Images/godray.png"
import portals from "../../../public/Images/portals.png"
import pass from "../../../public/Images/pass.png"
import magicbox from "../../../public/Images/magicbox.png"
import cookie from "../../../public/Images/cookie.png"
import glass from "../../../public/Images/glass.png"
import cards from "../../../public/Images/cards.png"
import ring from "../../../public/Images/ring.png"
import gallery from "../../../public/Images/gallery.png"
import tiles from "../../../public/Images/tiles.png"
import bubbles from "../../../public/Images/bubbles.png"
import graces from "../../../public/Images/graces.png"
import frost from "../../../public/Images/frost.png"
import drone from "../../../public/Images/drone.png"
import starwars from "../../../public/Images/starwars.png"
import bruno from "../../../public/Images/bruno.png"
import refraction from "../../../public/Images/refraction.png"
import envmaps from "../../../public/Images/envmaps.png"
import prism from "../../../public/Images/prism.png"
import porshe from "../../../public/Images/porshe.png"
import shoe from "../../../public/Images/shoe.png"
import audio from "../../../public/Images/audio.png"
import ground from "../../../public/Images/ground.png"
import portal from "../../../public/Images/portal.png"
import occlusion from "../../../public/Images/occlusion.png"
import spline from "../../../public/Images/spline.png"
import diamondrefraction from "../../../public/Images/diamondrefraction.png"
import diamondring from "../../../public/Images/diamondring.png"
import projection from "../../../public/Images/projection.png"
import splineglass from "../../../public/Images/splineglass.png"
import bunny from "../../../public/Images/bunny.png"
import csg from "../../../public/Images/csg.png"
import gltf from "../../../public/Images/gltf.png"
import clump from "../../../public/Images/clump.png"
import fields from "../../../public/Images/fields.png"
import scrollcontrols from "../../../public/Images/scrollcontrols.png"
import infinity from "../../../public/Images/infinite.png"
import minimap from "../../../public/Images/minimap.png"
import instanced from "../../../public/Images/instanced.png"
import furniture from "../../../public/Images/furniture.png"
import portalshapes from "../../../public/Images/portalshapes.png"
import aquarium from "../../../public/Images/aquarium.png"
import blend from "../../../public/Images/blend.png"
import inter from "../../../public/Images/inter.png"
import stage from "../../../public/Images/stage.png"
import react from "../../../public/Images/react.png"
import decals from "../../../public/Images/decals.png"
import baking from "../../../public/Images/baking.png"
import test from "../../../public/Images/test.png"
import operations from "../../../public/Images/operations.png"
import faucets from "../../../public/Images/faucets.png"
import rapier from "../../../public/Images/rapier.png"
import hdr from "../../../public/Images/hdr.png"
import groundlamina from "../../../public/Images/groundlamina.png"
import ballpit from "../../../public/Images/ballpit.png"
import backdrop from "../../../public/Images/backdrop.png"
import clones from "../../../public/Images/clones.png"
import lamina1x from "../../../public/Images/lamina1x.png"
import outlines from "../../../public/Images/outlines.png"
import pmndrs from "../../../public/Images/pmndrs.png"
import hall from "../../../public/Images/hall.png"
import train from "../../../public/Images/train.png"
import bouncy from "../../../public/Images/bouncy.png"
import transparent from "../../../public/Images/transparent.png"
import raycast from "../../../public/Images/raycast.png"
import landingpage from "../../../public/Images/landingpage.png"
import scrollcontrolsgltf from "../../../public/Images/scrollcontrolsgltf.png"
import instance from "../../../public/Images/instance.png"
import dof from "../../../public/Images/dof.png"
import key from "../../../public/Images/key.png"
import floatingshoes from "../../../public/Images/floatingshoes.png"
import simpleaudio from "../../../public/Images/simpleaudio.png"
import camerascroll from "../../../public/Images/camerascroll.png"
import springyboxes from "../../../public/Images/springyboxes.png"
import floatingdiamond from "../../../public/Images/floatingdiamond.png"
import gltfanimations from "../../../public/Images/gltfanimations.png"
import sparks from "../../../public/Images/sparks.png"
import camerashake from "../../../public/Images/camerashake.png"
import ragdoll from "../../../public/Images/ragdoll.png"
import reactspring from "../../../public/Images/reactspring.png"
import gatsby from "../../../public/Images/gatsby.png"
import mount from "../../../public/Images/mount.png"
import laptop from "../../../public/Images/laptop.png"
import zustand from "../../../public/Images/zustand.png"
import cell from "../../../public/Images/cell.png"
import router from "../../../public/Images/router.png"
import softshadows from "../../../public/Images/ragdoll.png"
import lulaby from "../../../public/Images/lulaby.png"
import viking from "../../../public/Images/viking.png"
import wobbling from "../../../public/Images/wobbling.png"
import moksha from "../../../public/Images/moksha.png"
import flexbox from "../../../public/Images/flexbox.png"
import confetti from "../../../public/Images/confetti.png"
import jason from "../../../public/Images/jason.png"
import spotlight from "../../../public/Images/spotlight.png"
import racing from "../../../public/Images/racing.png"
import pinball from "../../../public/Images/jason.png"
import space from "../../../public/Images/space.png"
import minecraft from "../../../public/Images/minecraft.png"
import arkanoid from "../../../public/Images/arkanoid.png"
import pingpong from "../../../public/Images/pingpong.png"
import arkanoid60 from "../../../public/Images/arkanoid60.png"
import shader from "../../../public/Images/shader.png"
import water from "../../../public/Images/water.png"
import staging from "../../../public/Images/staging.png"
import grading from "../../../public/Images/grading.png"



export default function FeaturedWork() {
  const [isHovering, setIsHovering] = useState<string | null>(null);
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const [targetPosition, setTargetPosition] = useState<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  const projects = [
    {
      id: 'lusion',
      title: 'Lusion Connector',
      tags: 'Three.JS • Lusion',
      link: 'https://codesandbox.io/p/sandbox/xy8c8z',
      image: lusion
    },
    {
      id: 'Shopping',
      title: 'Shopping',
      tags: 'Vanilla • Three.js • 3D',
      link: 'https://codesandbox.io/p/devbox/admiring-tu-3r875p',
      image: shopping
    },
    {
      id: 'cardfloat',
      title: 'Card With Border Radius',
      tags: 'Three.JS • 3D CARDS',
      link: 'https://codesandbox.io/p/devbox/cards-with-border-radius-forked-d7fhy8',
      image: cardfloat
    },
    {
      id: 'fisheye',
      title: 'ThreeJS Fisheye',
      tags: 'Three.JS • Fisheye',
      link: 'https://codesandbox.io/p/devbox/threejs-journey-lv-1-fisheye-forked-hw8m63',
      image: fisheye
    },
    {
      id: 'grading',
      title: 'Color Grading',
      tags: 'Vanilla • Three.js • 3D',
      link: 'https://codesandbox.io/p/sandbox/wvgxp',
      image: grading
    },
    {
      id: 'Christman',
      title: 'Marry Christmas',
      tags: 'Three.JS • 3D ILLUSTRATION ',
      link: 'https://codesandbox.io/p/github/nodesinfinity/christmas-threejs/main',
      // Using placeholder until actual image is available
      image: christmasImg,
    },
    {
      id: 'ecctrl',
      title: 'Ecctrl + Fisheye',
      tags: 'Character Controller • Ecctrl ',
      link: 'https://codesandbox.io/p/sandbox/nvk9pf',
      // Using placeholder until actual image is available
      image: ecctrl,
    },
    {
      id: 'monitors',
      title: 'Monitors',
      tags: 'Effect • Reflections ',
      link: 'https://codesandbox.io/p/sandbox/bst0cy',
      // Using placeholder until actual image is available
      image: monitors,
    },
    {
      id: 'banana',
      title: 'Flying Banana',
      tags: 'Effects Control • Banana ',
      link: 'https://codesandbox.io/p/sandbox/2ycs3?file=%2Fsrc%2Findex.js',
      // Using placeholder until actual image is available
      image: banana,
    },
    {
      id: 'tshirt',
      title: 'T-Shirt Configuration',
      tags: 'T-Shirts • Soft-Shadows ',
      link: 'https://codesandbox.io/p/sandbox/ioxywi?file=%2Fsrc%2Findex.js',
      // Using placeholder until actual image is available
      image: tshirts,
    },
    {
      id: 'caustics',
      title: 'Caustics',
      tags: 'Caustics • Soft-Shadows ',
      link: 'https://codesandbox.io/p/sandbox/szj6p7',
      // Using placeholder until actual image is available
      image: caustics,
    },
    {
      id: 'ssgi',
      title: 'SSGI spheres with rapier physics',
      tags: 'Three.JS • ssgi ',
      link: 'https://codesandbox.io/p/sandbox/5w35n6',
      // Using placeholder until actual image is available
      image: ssgi,
    },
    {
      id: 'cloud',
      title: 'Thunder Clouds',
      tags: 'Thunder • Clouds ',
      link: 'https://codesandbox.io/p/sandbox/gwthnh?file=%2Fsrc%2FApp.js',
      // Using placeholder until actual image is available
      image: cloud,
    },
    {
      id: 'motion',
      title: 'Motion Control',
      tags: 'Motion-path • Clouds ',
      link: 'https://codesandbox.io/p/sandbox/2y73c6',
      // Using placeholder until actual image is available
      image: motion,
    },
    {
      id: 'room',
      title: 'Room With Soft Shadows',
      tags: 'Caustics effects •Soft ',
      link: 'https://codesandbox.io/p/sandbox/ykfpwf',
      // Using placeholder until actual image is available
      image: room,
    },
    {
      id: 'godray',
      title: 'Volumetric Light, Godray',
      tags: 'Godrays • Reflection',
      link: 'https://codesandbox.io/p/sandbox/yggpw5',
      // Using placeholder until actual image is available
      image: godray,
    },
    {
      id: 'portals',
      title: 'Enter Portals',
      tags: 'Portals • Image Scroll ',
      link: 'https://codesandbox.io/p/sandbox/9m4tpc',
      // Using placeholder until actual image is available
      image: portals,
    },
    {
      id: 'pass',
      title: 'Pass Through Portals',
      tags: 'Portals • Image Scroll ',
      link: 'https://codesandbox.io/p/sandbox/qvk72r',
      // Using placeholder until actual image is available
      image: pass,
    },
    {
      id: 'magicbox',
      title: 'Magic Box',
      tags: 'Three.JS • Portals ',
      link: 'https://codesandbox.io/p/sandbox/drc6qg',
      // Using placeholder until actual image is available
      image: magicbox,
    },
    {
      id: 'cookie',
      title: 'Video cookies',
      tags: 'Video • Cookies ',
      link: 'https://codesandbox.io/p/sandbox/hmbn1l',
      // Using placeholder until actual image is available
      image: cookie,
    },
    {
      id: 'glass',
      title: 'Glass Glower',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/hmbn1l',
      // Using placeholder until actual image is available
      image: glass,
    },
    {
      id: 'cards',
      title: 'Cards',
      tags: 'Cards • Images ',
      link: 'https://codesandbox.io/p/sandbox/dc5fjy',
      // Using placeholder until actual image is available
      image: cards,
    },
    {
      id: 'ring',
      title: 'Daimond Ring',
      tags: 'Daimond • Reflection ',
      link: 'https://codesandbox.io/p/sandbox/3ywzzx',
      // Using placeholder until actual image is available
      image: ring,
    },
    {
      id: 'gallery',
      title: 'Image Gallery',
      tags: 'Images • Reflection ',
      link: 'https://codesandbox.io/p/sandbox/xy8c8z',
      // Using placeholder until actual image is available
      image: gallery,
    },
    {
      id: 'tiles',
      title: 'Horizontal Tiles',
      tags: 'Scroll • Control ',
      link: 'https://codesandbox.io/p/sandbox/xy8c8z',
      // Using placeholder until actual image is available
      image: tiles,
    },
    {
      id: 'bubbles',
      title: 'BestServedBold Christmas Baubles',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/zxpv7',
      // Using placeholder until actual image is available
      image: bubbles,
    },
    {
      id: 'graces',
      title: 'The Three Graces',
      tags: 'Three.JS • Annotations ',
      link: 'https://codesandbox.io/p/sandbox/0n9it',
      // Using placeholder until actual image is available
      image: graces,
    },
    {
      id: 'frost',
      title: 'Frost Glass',
      tags: 'Glass • Transmission ',
      link: 'https://codesandbox.io/p/sandbox/imn42',
      // Using placeholder until actual image is available
      image: frost,
    },
    {
      id: 'drone',
      title: 'GLTFJSX 400kb Drone',
      tags: 'Three.JS • Drone ',
      link: 'https://codesandbox.io/p/sandbox/pbwi6i',
      // Using placeholder until actual image is available
      image: drone,
    },
    {
      id: 'starwars',
      title: 'Starwars',
      tags: 'Three.JS • Starwars ',
      link: 'https://codesandbox.io/p/sandbox/fslt99',
      // Using placeholder until actual image is available
      image: starwars,
    },
    {
      id: 'bruno',
      title: 'Bruno Simons 20k challenge',
      tags: 'Three.JS • Physics ',
      link: 'https://codesandbox.io/p/sandbox/2qfxj4',
      // Using placeholder until actual image is available
      image: bruno,
    },
    {
      id: 'refraction',
      title: 'Scrollcontrols and lens refraction',
      tags: 'Three.JS • Refraction ',
      link: 'https://codesandbox.io/p/sandbox/e662p3',
      // Using placeholder until actual image is available
      image: refraction,
    },
    {
      id: 'envmaps',
      title: 'Building dynamic envmaps',
      tags: 'Effect • Bloom ',
      link: 'https://codesandbox.io/p/sandbox/e662p3',
      // Using placeholder until actual image is available
      image: envmaps,
    },
    {
      id: 'prism',
      title: 'Next.js Prism',
      tags: 'Effect • Bloom ',
      link: 'https://codesandbox.io/p/sandbox/j3ycvl',
      // Using placeholder until actual image is available
      image: prism,
    },
    {
      id: 'porshe',
      title: 'Porshe Envmaps',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/lwo219',
      // Using placeholder until actual image is available
      image: porshe,
    },
    {
      id: 'shoe',
      title: 'Shoe Configure',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/qxjoj',
      // Using placeholder until actual image is available
      image: shoe,
    },
    {
      id: 'audio',
      title: 'Audio Analyser',
      tags: 'Three.JS • Audio Wave ',
      link: 'https://codesandbox.io/p/sandbox/dvokj',
      // Using placeholder until actual image is available
      image: audio,
    },
    {
      id: 'ground',
      title: 'Ground reflections and video textures',
      tags: 'Ground • Reflection ',
      link: 'https://codesandbox.io/p/sandbox/bfplr',
      // Using placeholder until actual image is available
      image: ground,
    },
    {
      id: 'portal',
      title: 'ThreeJS Journey Portal',
      tags: 'Bruno • Simon ',
      link: 'https://codesandbox.io/p/sandbox/ni6v4',
      // Using placeholder until actual image is available
      image: portal,
    },
    {
      id: 'occlusion',
      title: 'Mixing HTML and WebGL w/ occlusion',
      tags: 'HTML • Iframe ',
      link: 'https://codesandbox.io/p/sandbox/9keg6',
      // Using placeholder until actual image is available
      image: occlusion,
    },
    {
      id: 'spline',
      title: 'Interactive spline scene + live HTML',
      tags: 'Spline • 3D ',
      link: 'https://codesandbox.io/p/sandbox/f79ucc',
      // Using placeholder until actual image is available
      image: spline,
    },
    {
      id: 'diamondrefraction',
      title: 'Diamond refraction',
      tags: ' Refraction ',
      link: 'https://codesandbox.io/p/sandbox/zqrreo',
      // Using placeholder until actual image is available
      image: diamondrefraction,
    },
    {
      id: 'diamondring',
      title: 'Diamond Ring',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/4gy946',
      // Using placeholder until actual image is available
      image: diamondring,
    },
    {
      id: 'projection',
      title: 'Envmap ground projection',
      tags: 'Ground Projected • Env ',
      link: 'https://codesandbox.io/p/sandbox/q48jgy',
      // Using placeholder until actual image is available
      image: projection,
    },
    {
      id: 'splineglass',
      title: 'Spline Glass Shape',
      tags: 'Glass • Shape ',
      link: 'https://codesandbox.io/p/sandbox/ju368j',
      // Using placeholder until actual image is available
      image: splineglass,
    },
    {
      id: 'bunny',
      title: 'CSG bunny, useGroups',
      tags: 'UseGroup • Bunny ',
      link: 'https://codesandbox.io/p/sandbox/mlgzsc',
      // Using placeholder until actual image is available
      image: bunny,
    },
    {
      id: 'csg',
      title: 'CSG house',
      tags: 'CSG • House ',
      link: 'https://codesandbox.io/p/sandbox/y52tmt',
      // Using placeholder until actual image is available
      image: csg,
    },
    {
      id: 'gltf',
      title: 'GLTF Animations tied to scroll',
      tags: 'Scroll • Animation ',
      link: 'https://codesandbox.io/p/sandbox/hg3ejl',
      // Using placeholder until actual image is available
      image: gltf,
    },
    {
      id: 'clump',
      title: 'Object Clump',
      tags: 'Physics • Effects ',
      link: 'https://codesandbox.io/p/sandbox/ssbdsw',
      // Using placeholder until actual image is available
      image: clump,
    },
    {
      id: 'fields',
      title: 'HTML Input fields',
      tags: 'Fields • Input ',
      link: 'https://codesandbox.io/p/sandbox/024uom',
      // Using placeholder until actual image is available
      image: fields,
    },
    {
      id: 'scrollcontrols',
      title: 'UseIntersect and scrollcontrols',
      tags: ' Scroll ',
      link: 'https://codesandbox.io/p/sandbox/gsm1y',
      // Using placeholder until actual image is available
      image: scrollcontrols,
    },
    {
      id: 'infinity',
      title: 'Infinity Scroll',
      tags: 'Infinity • Scroll ',
      link: 'https://codesandbox.io/p/sandbox/x8gvs',
      // Using placeholder until actual image is available
      image: infinity,
    },{
      id: 'minimap',
      title: 'Scrollcontrols with minimap',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/yjhzv',
      // Using placeholder until actual image is available
      image: minimap,
    },{
      id: 'instanced',
      title: 'Instanced particles + Effects',
      tags: 'Particles • Effects ',
      link: 'https://codesandbox.io/p/sandbox/qpfgyp',
      // Using placeholder until actual image is available
      image: instanced,
    },{
      id: 'furniture',
      title: 'Dbismut furniture',
      tags: 'Three.JS • Furniture ',
      link: 'https://codesandbox.io/p/sandbox/62o18n',
      // Using placeholder until actual image is available
      image: furniture,
    },{
      id: 'portalshapes',
      title: 'Portal Shapes',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/8j36ok',
      // Using placeholder until actual image is available
      image: portalshapes,
    },{
      id: 'aquarium',
      title: 'Aquarium',
      tags: 'Aquarium ',
      link: 'https://codesandbox.io/p/sandbox/n7jf0f',
      // Using placeholder until actual image is available
      image: aquarium,
    },{
      id: 'blend',
      title: 'Portals Blend',
      tags: 'Portals • Blend ',
      link: 'https://codesandbox.io/p/sandbox/ik11ln',
      // Using placeholder until actual image is available
      image: blend,
    },{
      id: 'inter',
      title: 'Inter, epoxy resin',
      tags: 'Inter • 3D ',
      link: 'https://codesandbox.io/p/sandbox/lxvqek',
      // Using placeholder until actual image is available
      image: inter,
    },{
      id: 'stage',
      title: 'Stage presets, gltfjsx',
      tags: 'Three.JS • Stage ',
      link: 'https://codesandbox.io/p/sandbox/if9crg',
      // Using placeholder until actual image is available
      image: stage,
    },{
      id: 'react',
      title: 'React EllipseCurve',
      tags: 'Three.JS • React ',
      link: 'https://codesandbox.io/p/sandbox/xzi6ps',
      // Using placeholder until actual image is available
      image: react,
    },{
      id: 'decals',
      title: 'Iridescent decals',
      tags: 'Three.JS • Decals ',
      link: 'https://codesandbox.io/p/sandbox/qvb1vk',
      // Using placeholder until actual image is available
      image: decals,
    },{
      id: 'baking',
      title: 'Baking soft shadows',
      tags: 'Three.JS • Baking ',
      link: 'https://codesandbox.io/p/sandbox/hxcc1x',
      // Using placeholder until actual image is available
      image: baking,
    },{
      id: 'test',
      title: 'SSR Test',
      tags: 'SSR • Test ',
      link: 'https://codesandbox.io/p/sandbox/8pbw1f',
      // Using placeholder until actual image is available
      image: test,
    },{
      id: 'operations',
      title: 'CSG operations + Rapier physics',
      tags: 'Three.JS • Physics ',
      link: 'https://codesandbox.io/p/sandbox/mw0dtc',
      // Using placeholder until actual image is available
      image: operations,
    },{
      id: 'faucets',
      title: 'Faucets, select highlight',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/8flefh',
      // Using placeholder until actual image is available
      image: faucets,
    },{
      id: 'rapier',
      title: 'Rapier physics',
      tags: 'Three.JS • Rapier ',
      link: 'https://codesandbox.io/p/sandbox/7e9y1b',
      // Using placeholder until actual image is available
      image: rapier,
    },{
      id: 'hdr',
      title: 'Bloom hdr workflow, GLTF',
      tags: 'Three.JS • HDR ',
      link: 'https://codesandbox.io/p/sandbox/whnhyr',
      // Using placeholder until actual image is available
      image: hdr,
    },{
      id: 'groundlamina',
      title: 'Ground projected envmaps + lamina',
      tags: 'Three.JS • Lumina ',
      link: 'https://codesandbox.io/p/sandbox/0c5hv9',
      // Using placeholder until actual image is available
      image: groundlamina,
    },{
      id: 'ballpit',
      title: 'Basic ballpit',
      tags: 'Three.JS • Ballpit ',
      link: 'https://codesandbox.io/p/sandbox/0fqow2',
      // Using placeholder until actual image is available
      image: ballpit,
    },{
      id: 'backdrop',
      title: 'Backdrop and cables',
      tags: 'Three.JS • Backdrop ',
      link: 'https://codesandbox.io/p/sandbox/2ij9u',
      // Using placeholder until actual image is available
      image: backdrop,
    },
    {
      id: 'clones',
      title: 'Clones',
      tags: 'Three.JS • Clones ',
      link: 'https://codesandbox.io/p/sandbox/42glz0',
      // Using placeholder until actual image is available
      image: clones,
    }, {
      id: 'lamina1x',
      title: 'lamina 1.x',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/ledhe1',
      // Using placeholder until actual image is available
      image: lamina1x,
    }, {
      id: 'outlines',
      title: 'React-pp outlines',
      tags: 'Three.JS • Outlines ',
      link: 'https://codesandbox.io/p/sandbox/nurp5t',
      // Using placeholder until actual image is available
      image: outlines,
    }, {
      id: 'gatsby',
      title: 'Gatsby stars',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/2csbr1',
      // Using placeholder until actual image is available
      image: gatsby,
    }, {
      id: 'pmndrs',
      title: 'Pmndrs + Vercel',
      tags: 'Three.JS • Pmndrs ',
      link: 'https://codesandbox.io/p/sandbox/go0b4w',
      // Using placeholder until actual image is available
      image: pmndrs,
    }, {
      id: 'hall',
      title: 'Sport Hall',
      tags: 'Three.JS • Sports ',
      link: 'https://codesandbox.io/p/sandbox/s006f',
      // Using placeholder until actual image is available
      image: hall,
    }, {
      id: 'train',
      title: 'Night Train',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/l900i',
      // Using placeholder until actual image is available
      image: train,
    }, {
      id: 'bouncy',
      title: 'Bouncy Watch',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/qyz5r',
      // Using placeholder until actual image is available
      image: bouncy,
    }, {
      id: 'transparent',
      title: 'Transparent aesop bottles',
      tags: 'Three.JS • Transparent Bottle ',
      link: 'https://codesandbox.io/p/sandbox/kv7tv',
      // Using placeholder until actual image is available
      image: transparent,
    }, {
      id: 'raycast',
      title: 'Raycast Cycling',
      tags: 'Three.JS • Raycast ',
      link: 'https://codesandbox.io/p/sandbox/ls503',
      // Using placeholder until actual image is available
      image: raycast,
    }, {
      id: 'landingpage',
      title: 'Landing Page',
      tags: 'Three.JS • Landing Page ',
      link: 'https://codesandbox.io/p/sandbox/n60qg',
      // Using placeholder until actual image is available
      image: landingpage,
    }, {
      id: 'scrollcontrolsgltf',
      title: 'Scrollcontrols + GLTF',
      tags: 'Three.JS • Scrollcontrols + GLTF ',
      link: 'https://codesandbox.io/p/sandbox/4jr4p',
      // Using placeholder until actual image is available
      image: scrollcontrolsgltf,
    }, {
      id: 'instance',
      title: 'Merged Instance',
      tags: 'Three.JS • Instance ',
      link: 'https://codesandbox.io/p/sandbox/kud9p',
      // Using placeholder until actual image is available
      image: instance,
    }, {
      id: 'dof',
      title: 'GPGPU Curl-noise + DOF',
      tags: 'Three.JS • DOF ',
      link: 'https://codesandbox.io/p/sandbox/zgsyn',
      // Using placeholder until actual image is available
      image: dof,
    }, {
      id: 'key',
      title: 'Hi Key',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/i6t0j',
      // Using placeholder until actual image is available
      image: key,
    }, {
      id: 'floatingshoes',
      title: 'Floating Instance Shoes',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/h8o2d',
      // Using placeholder until actual image is available
      image: floatingshoes,
    }, {
      id: 'simple audio',
      title: 'Simple Audio Analyser',
      tags: 'Three.JS • Audio Analyser ',
      link: 'https://codesandbox.io/p/sandbox/wu51m',
      // Using placeholder until actual image is available
      image: simpleaudio,
    }, {
      id: 'camerascroll',
      title: 'Camera Scroll',
      tags: 'Three.JS • Camera ',
      link: 'https://codesandbox.io/p/sandbox/tu24h',
      // Using placeholder until actual image is available
      image: camerascroll,
    }, {
      id: 'springyboxes',
      title: 'Springy Boxes',
      tags: 'Three.JS • Boxes ',
      link: 'https://codesandbox.io/p/sandbox/jz9l97qn89',
      // Using placeholder until actual image is available
      image: springyboxes,
    }, {
      id: 'floatingdiamond',
      title: 'Floating Diamond',
      tags: 'Three.JS • Diamond ',
      link: 'https://codesandbox.io/p/sandbox/prb9t',
      // Using placeholder until actual image is available
      image: floatingdiamond,
    },
    {
      id: 'gltfanimations',
      title: 'GLTF Animations',
      tags: 'Three.JS • GLTF ',
      link: 'https://codesandbox.io/p/sandbox/pecl6',
      // Using placeholder until actual image is available
      image: gltfanimations,
    },{
      id: 'sparks',
      title: 'Sparks & Effects',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/sbf2i',
      // Using placeholder until actual image is available
      image: sparks,
    },{
      id: 'camerashake',
      title: 'Camera Shake',
      tags: 'Three.JS • Shake ',
      link: 'https://codesandbox.io/p/sandbox/t4l0f',
      // Using placeholder until actual image is available
      image: camerashake,
    },{
      id: 'ragdoll',
      title: 'Ragdoll Physics',
      tags: 'Three.JS • Ragdoll ',
      link: 'https://codesandbox.io/p/sandbox/wdzv4',
      // Using placeholder until actual image is available
      image: ragdoll,
    },{
      id: 'reactspring',
      title: 'React-Spring Animations',
      tags: 'Three.JS • Spring ',
      link: 'https://codesandbox.io/p/sandbox/6hi1y',
      // Using placeholder until actual image is available
      image: reactspring,
    },{
      id: 'mount',
      title: 'Mount transitions',
      tags: 'Three.JS • Mount ',
      link: 'https://codesandbox.io/p/sandbox/1sccp',
      // Using placeholder until actual image is available
      image: mount,
    },{
      id: 'laptop',
      title: 'Floating laptop',
      tags: 'Three.JS • Laptop ',
      link: 'https://codesandbox.io/p/sandbox/q23sw',
      // Using placeholder until actual image is available
      image: laptop,
    },{
      id: 'zustand',
      title: 'Zustand site',
      tags: 'Three.JS • Zustand ',
      link: 'https://codesandbox.io/p/sandbox/gpioq',
      // Using placeholder until actual image is available
      image: zustand,
    },{
      id: 'cell',
      title: 'Cell fracture',
      tags: 'Three.JS • Cell ',
      link: 'https://codesandbox.io/p/sandbox/3rjsl',
      // Using placeholder until actual image is available
      image: cell,
    },{
      id: 'router',
      title: 'Router transitions',
      tags: 'Three.JS • Router ',
      link: 'https://codesandbox.io/p/sandbox/4j2q2',
      // Using placeholder until actual image is available
      image: router,
    },{
      id: 'softshadows',
      title: 'Soft shadows',
      tags: 'Three.JS • Shadows ',
      link: 'https://codesandbox.io/p/sandbox/dh2jc',
      // Using placeholder until actual image is available
      image: softshadows,
    },{
      id: 'lulaby',
      title: 'Lulaby City',
      tags: 'Three.JS • City ',
      link: 'https://codesandbox.io/p/sandbox/gkfhr',
      // Using placeholder until actual image is available
      image: lulaby,
    },{
      id: 'viking',
      title: 'Viking Ship',
      tags: 'Three.JS • Ship ',
      link: 'https://codesandbox.io/p/sandbox/0buje',
      // Using placeholder until actual image is available
      image: viking,
    },{
      id: 'wobbling',
      title: 'Wobbling Sphere',
      tags: 'Three.JS • Sphere ',
      link: 'https://codesandbox.io/p/sandbox/5oufp',
      // Using placeholder until actual image is available
      image: wobbling,
    },{
      id: 'moksha',
      title: 'Moksha',
      tags: 'Three.JS • Moksha ',
      link: 'https://codesandbox.io/p/sandbox/f1ixt',
      // Using placeholder until actual image is available
      image: moksha,
    },{
      id: 'flexbox',
      title: 'Flexbox + Yoga',
      tags: 'Three.JS • WebGL ',
      link: 'https://codesandbox.io/p/sandbox/7psew',
      // Using placeholder until actual image is available
      image: flexbox,
    },{
      id: 'confetti',
      title: 'Confetti',
      tags: 'Three.JS • Lusion ',
      link: 'https://codesandbox.io/p/sandbox/vl221',
      // Using placeholder until actual image is available
      image: confetti,
    },{
      id: 'jason',
      title: 'Jason',
      tags: 'Three.JS • Jason ',
      link: 'https://codesandbox.io/p/sandbox/oep9o',
      // Using placeholder until actual image is available
      image: jason,
    },{
      id: 'spotlight',
      title: 'Spotlight',
      tags: 'Three.JS • Spotlight ',
      link: 'https://codesandbox.io/p/sandbox/tx1pq',
      // Using placeholder until actual image is available
      image: spotlight,
    },{
      id: 'racing',
      title: 'Racing Game',
      tags: 'Three.JS • Racing ',
      link: 'https://codesandbox.io/p/sandbox/lo6kp',
      // Using placeholder until actual image is available
      image: racing,
    },{
      id: 'pinball',
      title: 'Pinball in 70 lines',
      tags: 'Three.JS • Pinball ',
      link: 'https://codesandbox.io/p/sandbox/rmfcq',
      // Using placeholder until actual image is available
      image: pinball,
    },{
      id: 'space',
      title: 'Space Game',
      tags: 'Three.JS • Space ',
      link: 'https://codesandbox.io/p/sandbox/i2160',
      // Using placeholder until actual image is available
      image: space,
    },{
      id: 'minecraft',
      title: 'Minecraft',
      tags: 'Three.JS • Minecraft ',
      link: 'https://codesandbox.io/p/sandbox/vkgi6',
      // Using placeholder until actual image is available
      image: minecraft,
    },{
      id: 'arkanoid',
      title: 'Arkanoid',
      tags: 'Three.JS • Arkanoid ',
      link: 'https://codesandbox.io/p/sandbox/2yqpv',
      // Using placeholder until actual image is available
      image: arkanoid,
    },{
      id: 'pingpong',
      title: 'Rapier Ping-Pong',
      tags: 'Three.JS • Ping-Pong ',
      link: 'https://codesandbox.io/p/sandbox/ptdgrn',
      // Using placeholder until actual image is available
      image: pingpong,
    },{
      id: 'arkanoid60',
      title: 'Arkanoid under 60 LOC',
      tags: 'Three.JS • Arkanoid ',
      link: 'https://codesandbox.io/p/sandbox/xy8c8z',
      // Using placeholder until actual image is available
      image: arkanoid60,
    },{
      id: 'shader',
      title: 'Shader HMR',
      tags: 'Three.JS • Shader ',
      link: 'https://codesandbox.io/p/sandbox/ib0jc',
      // Using placeholder until actual image is available
      image: shader,
    },{
      id: 'water',
      title: 'Water Shader',
      tags: 'Three.JS • Water ',
      link: 'https://codesandbox.io/p/sandbox/1b40u',
      // Using placeholder until actual image is available
      image: water,
    },{
      id: 'staging',
      title: 'Staging and CameraShake',
      tags: 'Three.JS • Staging ',
      link: 'https://codesandbox.io/p/sandbox/0ycwe',
      // Using placeholder until actual image is available
      image: staging,
    }
  ];

  useEffect(() => {
    let animationFrameId: number | undefined;

    if (isHovering) {
      const smoothTransition = () => {
        setMousePosition(prev => ({
          x: prev.x + (targetPosition.x - prev.x) * 0.08,
          y: prev.y + (targetPosition.y - prev.y) * 0.08
        }));

        animationFrameId = requestAnimationFrame(smoothTransition);
      };

      animationFrameId = requestAnimationFrame(smoothTransition);
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isHovering, targetPosition]);

  const enhancedEffectStyle = `
    @keyframes glitchEffect {
      0% { transform: translate(0); filter: brightness(1); }
      25% { transform: translate(-3px, 1px); filter: brightness(1.03) contrast(1.03); }
      50% { transform: translate(2px, -1px); filter: brightness(0.97) contrast(1.05); }
      75% { transform: translate(-2px, 1px); filter: brightness(1.02); }
      100% { transform: translate(0); filter: brightness(1); }
    }

    .image-hover-container {
      position: relative;
      overflow: hidden;
      transition: transform 0.2s ease-out;
      perspective: 1000px;
    }

    .image-hover-container:hover {
      transform: scale(0.98);
    }

    .image-hover-container .image-wrapper {
      transition: transform 1.2s cubic-bezier(0.215, 0.61, 0.355, 1);
      transform-style: preserve-3d;
    }

    .image-hover-container:hover .image-wrapper.glitching {
      animation: glitchEffect 0.2s 4 linear;
    }

    .image-hover-container .image-glitch {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      mix-blend-mode: hard-light;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .image-hover-container:hover .image-glitch.glitching {
      opacity: 0.35;
    }
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTargetPosition({ x, y });
  };

  const handleMouseEnter = (projectId: string) => {
    setIsHovering(projectId);
    setIsGlitching(true);
    setTimeout(() => setIsGlitching(false), 200);
  };

  const handleMouseLeave = () => {
    setIsHovering(null);
    setTargetPosition({ x: 0.5, y: 0.5 });
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  useEffect(() => {
    const timer = setTimeout(() => setImagesLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const renderProjectImage = (project: { image: React.MouseEvent<HTMLButtonElement>, title: string, id: string }) => {
    return (
      <div className="w-full h-full relative">
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{
            objectFit: 'cover',
            transform: isHovering === project.id
              ? `translate(${(mousePosition.x - 0.5) * -15}px, ${(mousePosition.y - 0.5) * -15}px)
                 rotateY(${(mousePosition.x - 0.5) * 6}deg)
                 rotateX(${(mousePosition.y - 0.5) * -6}deg)`
              : 'none'
          }}
        />
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-16 px-8 md:px-16">
      <style dangerouslySetInnerHTML={{ __html: enhancedEffectStyle }} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-16 md:mb-24">
          <h1 className="text-6xl md:text-8xl leading-loose mb-8 md:mb-0 max-w-3xl text-black font-thin">
            <div style={{ height: "120px", width: "100%" }}>Components</div>
          </h1>
          <div className="max-w-md">
            <p className="text-sm font-medium">
              A SELECTION OF OUR MOST PASSIONATELY CRAFTED WORKS WITH FORWARD-THINKING CLIENTS AND FRIENDS OVER THE YEARS.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div
                  className={`rounded-2xl overflow-hidden mb-5 aspect-[4/3] image-hover-container cursor-pointer ${
                    !imagesLoaded ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'
                  }`}
                  onMouseEnter={() => handleMouseEnter(project.id)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={(e) => handleMouseMove(e)}
                >
                  <div className={`image-wrapper w-full h-full ${isHovering === project.id && isGlitching ? 'glitching' : ''}`}>
                    {renderProjectImage(project)}
                  </div>
                  <div className={`image-glitch absolute inset-0 ${isHovering === project.id && isGlitching ? 'glitching' : ''}`}>
                    <div className="w-full h-full relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{
                          objectFit: 'cover',
                          filter: 'hue-rotate(90deg) contrast(150%)'
                        }}
                      />
                    </div>
                  </div>
                </div>
              </a>
              <div className="mt-2">
                <p className="text-xs tracking-wide mb-1 text-black">{project.tags}</p>
                <h2 className="text-3xl font-light text-black">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {project.title}
                  </a>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

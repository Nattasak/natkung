import React from 'react'
import styled from 'styled-components'

import { PageTitle } from '../../shared/styles'

const WorksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const WorkWrapper = styled.div`
  flex-basis: 25%;
  padding: 15px;

  .card {
    display: block;
    position: relative;
    width: 240px;
    height: 400px;
    background: #000;
    overflow: hidden;

    &:hover {
      .head {
        transform: rotate(0deg);
        top: -52%;
      }
      h3 {
        top: 2%;
      }
      p {
        top: 10%;
        opacity: 0;
      }
      .overlay {
        background: none;
      }
      .view {
        opacity: 1;
        transform: scale(1, 1);
      }
    }
  }
  .head {
    position: absolute;
    top: -15%;
    left: -25%;
    width: 350px;
    height: 250px;
    background: #000;
    transform: rotate(-15deg);
    transition: all 0.3s;
    color: #fff;
    text-align: center;
    z-index: 2;
  }
  h3,
  p {
    position: absolute;
    text-align: center;
    transition: all 0.3s;
    left: 0;
    right: 0;
    z-index: 3;
  }
  h3 {
    top: 14%;
    color: #fff;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 19px;
    font-weight: 600;
  }
  p {
    top: 25%;
    color: #aaa;
  }
  img {
    width: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
    transition: all 0.3s;
    z-index: 1;
  }
  .view {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    z-index: 4;
    text-align: center;
    margin: auto;
    opacity: 0;
    border: 3px solid #fff;
    padding: 3px 15px;
    width: fit-content;
    color: #fff;
    font-weight: 600;
    transition: all 0.3s;
    transform: scale(0.3, 0.3);
    font-size: 16px;
    letter-spacing: 2px;
  }

  /* [ Tablets ] */
  @media (min-width: 768px) {
    padding: 40px;
  }

  /* [ Desktops ] */
  @media (min-width: 1025px) {
    flex-basis: 20%;
  }
`

export default () => {
  return (
    <div>
      <PageTitle>
        <span>R</span>
        <span>e</span>
        <span>c</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
        <span> </span>
        <span>W</span>
        <span>o</span>
        <span>r</span>
        <span>k</span>
      </PageTitle>
      <WorksContainer>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
        <WorkWrapper>
          <a href="#" class="card">
            <div class="head" />
            <h3>Title</h3>
            <p>testdesc</p>
            <div class="overlay" />
            <img src="img/works/1.png" />
            <div class="view">VIEW</div>
          </a>
        </WorkWrapper>
      </WorksContainer>
    </div>
  )
}

import React, { Component } from 'react';
import SidebarComponent from "../Layout/SidebarComponent"
import "./index.css"
class Schedule extends Component {
    state = {}
    render() {
        return (
          <>
            <SidebarComponent />
            <div className="main">
              <div className="container main-content">
                <div class="card flex-row flex-wrap">
                  <div class="card-header border-0">
                    <img src="//placehold.it/200" alt="" />
                  </div>
                  <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">
                      BUTTON
                    </a>
                  </div>
                  <div class="w-100"></div>
                  <div class="card-footer w-100 text-muted">FOOTER</div>
                </div>

                <div class="card flex-row flex-wrap">
                  <div class="card-header border-0">
                    <img src="//placehold.it/200" alt="" />
                  </div>
                  <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">
                      BUTTON
                    </a>
                  </div>
                  <div class="w-100"></div>
                  <div class="card-footer w-100 text-muted">FOOTER</div>
                </div>

                <div class="card flex-row flex-wrap">
                  <div class="card-header border-0">
                    <img src="//placehold.it/200" alt="" />
                  </div>
                  <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">
                      BUTTON
                    </a>
                  </div>
                  <div class="w-100"></div>
                  <div class="card-footer w-100 text-muted">FOOTER</div>
                </div>

                <div class="card flex-row flex-wrap">
                  <div class="card-header border-0">
                    <img src="//placehold.it/200" alt="" />
                  </div>
                  <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">
                      BUTTON
                    </a>
                  </div>
                  <div class="w-100"></div>
                  <div class="card-footer w-100 text-muted">FOOTER</div>
                </div>
                
              </div>
            </div>
          </>
        );
    }
}

export default Schedule;
import * as React from "react"
import { Helmet } from "react-helmet";



const IndexPage = () => {
  return (
    <main className="container">
      <Helmet htmlAttributes={{ lang: 'en' }}>
        <title>Bootstrap Showcase</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      </Helmet>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">Home</li>
          <li class="breadcrumb-item active" aria-current="page">My documents</li>
        </ol>
      </nav>
      <h1>My document library</h1>
      <br />

      <div className="table-panel">
        <form>
          <div className="row">
            <div class="col-3">
              <label for="search" class="form-label">Search document</label>
              <input type="text" class="form-control" id="search" placeholder="Search" />
            </div>
            <div class="col-3">
              <label for="date-from" class="form-label">Date upload</label>
              <input type="date" class="form-control" id="date-from" placeholder="Date from" />
            </div>
            <div class="col-3">
              <label for="date-to" class="form-label">&nbsp;</label>
              <input type="date" class="form-control" id="date-to" placeholder="Date to" />
            </div>
            <div class="col-3">
              <button id="submit-button" type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <br />

      <div className="table-panel">
        <h2>Recently uploaded</h2>
        <p>Document type</p>

        <input type="radio" class="btn-check" name="options" id="docs-all" autocomplete="off" checked />
        <label class="btn btn-outline-primary" for="docs-all" style={{ marginRight: "8px" }}>All</label>
        <input type="radio" class="btn-check" name="options" id="docs-pdf" autocomplete="off" />
        <label class="btn btn-outline-primary" for="docs-pdf" style={{ marginRight: "8px" }}>PDF</label>
        <input type="radio" class="btn-check" name="options" id="docs-png" autocomplete="off" />
        <label class="btn btn-outline-primary" for="docs-png" style={{ marginRight: "8px" }}>PNG</label>
        <input type="radio" class="btn-check" name="options" id="docs-jpg" autocomplete="off" />
        <label class="btn btn-outline-primary" for="docs-jpg">JPG</label>

        <br />
        <br />

        <div class="table-responsive">
          <table class="table table-bordered">
            <thead class="table-dark">
              <tr>
                <th>Document name</th>
                <th>Description</th>
                <th>Type</th>
                <th>Uploaded</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Test result May 2021</td>
                <td>Blood test result: haematology and serum</td>
                <td>PDF</td>
                <td>1st June 2021</td>
                <td><a>Print</a>&nbsp;<a>Download</a></td>
              </tr>
              <tr>
                <td>Referral letter</td>
                <td>Letter for Dr Smith (Neurologist)</td>
                <td>PDF</td>
                <td>28th May 2021</td>
                <td><a>Print</a>&nbsp;<a>Download</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

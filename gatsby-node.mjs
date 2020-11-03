import path from "path"
import Proyects from "./src/services/Proyects"

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/proyect.js`)
  Proyects.forEach(proyect => {
    createPage({
      path: `/portfolio/${proyect.id}`,
      component: productTemplate,
      context: { ...proyect },
    })
  })
}

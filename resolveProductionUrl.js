export default function resolveProductionUrl(document) {
    return `http://localhost:3000?id=${document._id}`
  }
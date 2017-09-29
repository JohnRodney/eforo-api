export default function setEndpoint(endpoint) {
  this.options.uri = this.options.uri.replace(this.currentUri, endpoint);
  this.currentUri = endpoint;
}

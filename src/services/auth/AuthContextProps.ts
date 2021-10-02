export type AuthContextProps = {
  authenticating: boolean
  authenticated: boolean
  logout: () => Promise<void>
  getToken: () => Promise<string | undefined>
}

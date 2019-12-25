/** @jsx jsx */
import { FC } from 'react';
import { jsx } from 'theme-ui';

interface AvatarProps extends IfiokJrLogoProps {}

interface IfiokJrLogoProps {
  size?: number | string;
}

const IfiokJrLogo: FC<IfiokJrLogoProps & JSX.IntrinsicElements['svg']> = ({ size, ...props }) => {
  return (
    <svg width={size} height={size} viewBox='0 0 521 521' {...props}>
      <title>{'Ifiok Jr. Stencil Logo'}</title>
      <g fillRule='nonzero' fill='none'>
        <path d='M259.92 1.157H0v518.845h519.841V1.157z' fill='#EC7605' />
        <g fill='#170A03'>
          <path d='M296.31 29.583H176.096l-88.113 87.964L0 205.381v314.621h105.008c74.857 0 105.398-.39 106.437-1.427 1.04-1.038.65-2.595-1.3-5.968-1.559-2.465-3.898-6.098-5.068-7.914-1.3-1.947-2.989-4.93-3.768-6.747-.78-1.816-2.21-4.8-3.25-6.617-1.04-1.946-1.949-4.67-2.209-6.098-.26-1.427-1.04-3.373-1.82-4.41-.779-.909-1.949-3.374-2.339-5.32-.52-1.946-1.43-3.892-2.079-4.282-.65-.389-1.17-1.686-1.17-2.984 0-1.297-1.56-5.19-3.379-8.692-1.949-3.503-4.288-8.952-5.328-12.196-.91-3.243-2.6-13.752-3.639-23.353-1.17-10.25-1.56-21.667-1.04-27.635.52-7.265.26-11.028-1.04-13.623-.909-1.946-2.338-4.41-3.248-5.449-.78-1.038-1.95-3.892-2.47-6.227-.65-3.114-.39-4.152 1.04-4.152.91 0 2.86-1.038 4.03-2.465 2.078-2.335 2.078-2.595-1.04-5.06-1.95-1.427-3.38-3.503-3.38-4.67 0-1.168-1.04-2.595-2.209-2.984-1.3-.52-3.509-2.336-4.938-4.152-1.43-1.817-3.25-5.45-4.03-8.044-.779-2.725-2.208-8.822-3.118-13.753-.91-4.8-3.38-12.584-5.459-16.996-2.599-5.968-3.638-10.379-3.638-15.698 0-4.152-.78-9.99-1.82-13.234-.91-3.113-2.73-9.99-4.029-15.18-1.82-7.395-1.95-10.249-.91-12.714.91-1.816 2.6-3.114 4.16-3.114 2.079 0 2.339-.519 1.429-2.335-.65-1.168-1.82-5.45-2.6-9.341-.78-3.893-1.429-7.785-1.429-8.433 0-.779.26-7.266.52-14.661.39-7.395 1.04-13.882 1.43-14.531.39-.649.13-1.427-.65-1.946-.65-.39-1.3-2.725-1.3-5.06 0-2.465.91-5.06 1.95-5.968 1.3-1.038 1.689-2.725 1.04-4.93-.65-2.595-.39-3.114 1.169-2.465 1.3.389 2.6-.39 3.639-2.465 1.04-1.687 1.43-3.503.91-3.893-.39-.519-.13-2.075.65-3.632.779-1.427 2.728-3.763 4.418-4.93 2.08-1.687 3.379-4.8 4.549-11.677 1.17-6.747 2.599-10.38 5.328-13.493 1.95-2.206 3.639-4.541 3.639-5.06 0-.519 1.3-1.946 2.989-3.373 1.56-1.298 3.639-2.336 4.549-2.465.91 0 1.949-.908 2.339-1.946.52-1.038 2.08-1.947 3.639-1.947 1.56 0 4.028-.908 5.458-1.946 1.3-1.038 3.379-1.946 4.549-1.946 1.17 0 7.277-2.724 13.516-5.968 6.368-3.243 13.125-6.227 14.945-6.487 1.82-.26 5.458-1.167 8.187-2.076 2.6-.778 4.809-1.946 4.809-2.724 0-.649 8.707-.908 21.833-.52 17.285.65 22.224.39 24.173-1.037 1.3-1.038 2.989-1.557 3.639-1.168.52.39 2.729 1.038 4.678 1.427 1.95.39 4.809.779 6.498.779 1.56-.13 2.86.519 2.86 1.427 0 .778 1.949 1.557 4.288 1.687 2.47.26 6.368 1.167 8.838 2.205 2.469 1.038 7.147 2.206 10.656 2.725 3.38.519 6.108 1.427 6.108 1.946 0 .649 2.21 1.816 4.939 2.724 2.6.909 7.018 3.374 9.747 5.45 2.6 2.205 4.678 4.8 4.549 5.968-.26 1.037.78 2.594 2.339 3.373 1.43.648 2.47 2.076 2.08 2.984-.26.778.39 1.557 1.559 1.557 1.17 0 2.08-.649 2.08-1.427 0-.779.779-1.168 1.689-.779.78.26 1.56 1.557 1.56 2.984 0 1.687.909 2.335 2.598 2.206 1.3-.13 3.64.648 5.069 1.686 1.43 1.038 2.08 1.817 1.43 1.817-.52 0 .26 1.427 1.819 3.114 1.69 1.816 2.599 3.762 2.21 4.41-.39.78.129 1.687 1.299 2.077 1.04.389 1.69 1.167 1.43 1.816-.39.519.26 2.984 1.299 5.449 1.17 2.465 2.34 5.45 2.729 6.487.26 1.038.91 5.19 1.17 9.082.39 3.892 1.04 7.395 1.56 7.784.519.39 1.429 3.763 2.208 7.395.78 3.763.91 7.525.39 8.434-.65.908-.26 2.854.65 4.281 1.17 1.816 1.56 5.838 1.3 12.066l-.39 9.341h3.639c1.95 0 4.678 1.168 5.978 2.595 1.95 2.206 2.21 4.281 1.56 15.828-.39 7.396-1.3 20.11-1.95 28.284-.78 8.173-1.95 16.607-2.73 18.553-.779 2.076-1.429 5.19-1.429 7.006 0 1.946-1.17 5.838-2.469 8.692-1.56 3.244-2.859 9.471-3.249 15.699-.39 5.708-1.04 12.066-1.43 14.271-.39 2.076-1.04 7.266-1.429 11.288-.65 5.19-1.56 7.654-2.99 8.173-1.169.39-3.118 3.114-4.418 6.228-1.3 2.984-2.859 6.357-3.379 7.395-.65 1.038-1.82 1.946-2.729 1.946-.91 0-2.34-1.038-2.989-2.205-1.04-1.557-.78-3.244 1.04-6.747 1.43-2.595 2.859-4.67 3.249-4.67.39 0 1.69-1.687 2.859-3.633 1.3-2.076 1.69-4.282 1.17-5.32-.78-1.167-2.21-1.297-5.329-.519-3.249.909-4.678 2.076-5.458 4.93-.52 2.076-2.6 7.136-4.549 11.288-1.95 4.152-4.418 7.525-5.198 7.525-1.04 0-1.69 1.687-1.69 3.762 0 2.076-1.17 5.06-2.729 6.747-1.82 2.076-2.47 2.335-1.95.908.26-1.168-.26-2.854-1.299-3.633-1.04-.908-1.82-2.724-1.82-4.151 0-1.298-.91-2.725-1.949-3.114-1.04-.519-1.95-2.076-1.95-3.763 0-1.946-2.079-4.54-5.847-7.654-4.419-3.763-6.498-4.541-9.098-3.892-1.82.389-3.249 1.556-3.249 2.594 0 1.038.65 2.984 1.56 4.282 1.17 1.946 1.17 2.984 0 4.411-1.04 1.168-5.328 2.076-12.086 2.595-5.849.389-11.177 1.297-11.957 2.076-1.04 1.038-.52 2.335 1.56 4.54l2.859 3.114 5.848-3.113c3.25-1.687 7.018-3.114 8.448-3.114 1.3 0 2.469.519 2.469 1.297 0 .649 1.04 1.298 2.34 1.298 1.299 0 2.988 1.297 3.768 2.854.78 1.687 1.95 4.67 2.73 6.876.649 2.076 1.039 6.747.909 10.38-.13 3.502-1.56 9.86-3.12 13.882-1.429 4.151-2.728 8.822-2.728 10.509 0 1.556-1.04 3.762-2.34 4.8-1.3 1.038-4.288 3.243-6.498 4.93-2.339 1.687-4.938 2.854-5.848 2.595-.78-.13-3.119.778-5.068 2.076-2.6 1.686-4.809 2.076-7.798 1.557-2.34-.52-7.668-1.168-11.826-1.687-5.849-.519-8.058-.26-9.877 1.427-1.3 1.168-2.73 1.687-3.12 1.298-.52-.52-1.689-.13-2.859.778-1.17 1.038-3.638 1.297-6.757.778-2.73-.519-7.798-1.556-11.307-2.465-3.379-.778-6.628-2.205-6.888-3.113-.39-.909-2.34-1.687-4.419-1.687-2.599 0-4.548-1.168-6.887-4.281-1.95-2.466-3.38-4.93-3.38-5.709 0-.649-1.17-2.335-2.599-3.633-1.43-1.297-2.599-3.243-2.599-4.41 0-1.169-1.04-2.725-2.47-3.634-1.429-.908-3.118-4.41-4.028-8.173-1.3-5.58-1.3-7.006.52-9.73 1.17-1.687 2.08-4.672 2.08-6.488 0-1.946.78-3.243 1.819-3.243 1.04 0 2.34-.52 2.729-1.298.39-.648-.26-2.724-1.43-4.54-1.69-2.596-1.82-3.763-.65-4.93.78-.78 1.43-2.466 1.43-3.634 0-1.297-1.43-2.594-3.379-2.984-2.34-.648-4.159-.26-5.848 1.298-1.43 1.167-2.47 1.816-2.47 1.297 0-.519-2.079 1.298-4.548 4.022-2.859 3.114-4.029 5.32-3.249 6.098.78.778 1.3 2.595 1.3 4.281 0 1.687-.65 2.984-1.43 2.984-.91 0-1.3 2.725-1.04 7.396.13 4.151-.13 8.562-.65 9.86-.65 1.168-1.689 2.205-2.599 2.205-.78 0-2.859-1.167-4.678-2.594-1.82-1.427-3.639-2.595-4.159-2.595-.65 0-1.04 1.686-1.04 3.762 0 2.725 1.43 4.93 5.199 8.304 2.859 2.465 5.198 5.06 5.198 5.838 0 .778 1.17 1.816 2.73 2.206 1.429.519 2.339 1.167 1.949 1.557-.39.518 1.3 3.373 3.899 6.487 3.119 3.762 4.418 6.616 4.028 8.173-.39 1.687 0 2.595 1.04 2.595s5.069 4.152 8.967 9.212c4.03 5.06 9.487 10.638 12.087 12.455 2.729 1.686 6.758 5.19 9.097 7.525 2.21 2.465 7.148 6.227 10.787 8.562l6.758 4.152c9.986 4.217 15.76 6.281 17.319 6.195 2.34 0 17.18-5.21 19-5.989 1.69-.778 12.5-4.49 17-10.978 4.5-6.488 6.332-8.56 10.491-12.97 4.159-4.411 8.058-9.471 8.837-11.288.65-1.816 2.21-3.503 3.51-3.892 1.689-.39 2.469-1.946 2.599-5.32.26-2.594 1.04-5.189 1.949-5.708.91-.519 2.21-1.168 2.859-1.427.78-.26 1.43-2.335 1.43-4.541.13-2.335.26-5.19.39-6.487 0-1.297 1.17-3.503 2.469-4.93 1.3-1.427 2.21-3.244 1.95-4.022-.39-.908.389-2.984 1.559-4.8 1.17-1.817 3.119-3.633 4.288-4.022 1.3-.39 3.64-2.725 5.459-5.32 1.69-2.595 3.379-5.968 3.509-7.395.26-1.557.91-3.244 1.56-3.892.649-.649 1.559.519 2.079 2.724.39 2.206-3.028 40.792-3.938 49.355-.43 4.717-3.37 28.04-13 51.401-7.849 19.04-19.5 32.354-19.5 32.937 0 2.076 5.897 1.497 94.27 1.497h93.571v-12.066c0-7.655-.52-12.585-1.56-13.623-1.169-1.167-1.169-1.557 0-1.557 1.17 0 1.56-40.868 1.56-180.08v-179.95L468.117 81.09l-51.594-51.507H296.31z' />
          <path d='M321.652 222.637c-3.51-.26-9.877.13-14.166 1.038-4.159.908-8.187 2.205-8.967 2.984-.78.778-2.34 1.427-3.639 1.427-1.17 0-4.549 3.243-7.538 7.136-2.859 4.022-5.328 8.692-5.328 10.379 0 1.686.65 3.503 1.43 3.892.78.519.91 2.465.39 4.8-.52 2.984.13 5.968 2.728 11.418 2.6 5.449 4.939 8.303 9.488 11.157 3.249 2.076 6.887 4.152 7.927 4.541 1.17.52 5.848.26 10.527-.389 4.679-.649 10.007-1.816 12.086-2.595 1.95-.778 3.51-1.946 3.51-2.595 0-.648-1.17-1.557-2.6-1.946-1.82-.519-2.6-1.816-2.6-4.151 0-1.817.52-4.022 1.04-4.671.52-.779 3.51-2.595 6.758-4.282 3.25-1.556 7.668-2.854 9.877-2.854 2.21 0 4.809-.778 5.589-1.816 1.3-1.427 0-2.336-7.278-4.411-4.809-1.557-11.307-3.114-14.426-3.633-2.989-.52-5.848-1.298-6.238-1.946-.26-.649.91-1.427 2.73-1.946 1.819-.39 5.718-.39 8.837 0 2.989.519 7.407 1.946 9.747 3.373 2.339 1.427 5.068 2.595 6.108 2.595s1.95-.649 1.95-1.298c0-.778-.65-1.297-1.3-1.297-.78 0-2.99-1.168-5.069-2.725-2.989-2.205-5.718-2.724-16.895-2.854-11.956-.26-13.126-.519-12.866-2.595.26-1.297 1.82-3.114 3.64-4.022 1.819-1.038 5.458-2.724 8.187-3.892 4.288-1.816 4.808-2.595 4.028-5.06-.39-1.557-.91-2.854-1.04-2.984 0-.13-2.988-.389-6.627-.778zM391.31 233.275c-.65 0-2.469 1.947-3.898 4.412l-2.86 4.41 2.86 5.32c1.43 2.984 3.249 4.93 3.899 4.541.65-.39 1.17-4.67 1.17-9.73 0-4.93-.52-8.953-1.17-8.953zM202.088 238.076c-2.209-.13-5.068 0-6.498.26-1.43.259-3.249 1.426-4.158 2.594-.91 1.168-1.69 2.465-1.69 2.984 0 .39 1.95 1.427 4.289 2.076 2.21.778 5.718 1.687 7.797 2.076 2.34.519 3.51 1.687 3.51 3.373 0 1.427-1.17 2.725-2.86 3.244-1.69.389-4.159 1.297-5.588 1.816-1.43.649-5.848 1.816-9.747 2.725-4.159.908-8.578 2.984-10.657 4.93-2.08 1.816-3.639 4.281-3.639 5.32 0 1.296 1.43.518 4.289-2.207 2.21-2.205 6.758-4.93 9.877-6.097 3.119-1.038 7.798-1.946 10.397-1.817 2.599 0 3.769.39 2.729.779s-7.018 3.114-13.386 5.968c-6.238 2.854-11.177 5.838-10.917 6.617.26.778 1.95 1.556 3.64 1.686 1.689 0 6.107 1.038 9.616 1.946 3.64 1.038 8.708 1.687 11.567 1.298 4.548-.52 4.938-.39 4.158 2.076-.52 1.427-.26 2.984.39 3.373.78.519.78 2.335.13 4.67-.65 2.466-.65 3.893.13 3.893s4.549-1.427 8.448-3.244c4.028-1.816 7.797-2.984 8.447-2.465.78.39 3.12-.778 5.199-2.854 2.079-1.946 3.768-4.93 3.768-6.617 0-1.687.91-3.373 1.95-3.762 1.17-.52 1.95-2.465 1.95-5.06 0-2.336-.91-4.93-1.95-5.839-1.82-1.427-1.69-2.205.65-6.097 1.43-2.465 2.599-5.32 2.599-6.228 0-1.038-1.95-2.854-4.159-4.152-2.34-1.167-9.227-3.373-15.335-4.67-6.108-1.298-12.866-2.465-14.946-2.595zM143.866 263.116c-.78 0-.65.648.13 1.686.78.779 1.56 3.633 1.82 6.098l.52 4.541 1.689-3.503c1.69-3.243 1.56-3.892-.52-6.227-1.3-1.428-2.86-2.595-3.639-2.595zM289.032 327.986c-4.419.13-9.357 1.038-11.567 2.206-2.08 1.167-4.288 2.724-4.808 3.503-.52.778-.52 1.816 0 2.335.65.649 3.119 1.168 5.588 1.297 2.47.13 7.538.13 11.307 0 6.368-.26 6.628-.389 5.198-2.724-1.17-1.946-1.17-2.984.13-4.541 1.56-1.817.91-2.076-5.848-2.076zM240.167 333.305c-2.34 0-5.589.52-7.148 1.168-1.69.649-2.99 2.335-2.99 3.763 0 1.816 1.17 2.594 4.94 3.113 2.598.26 5.847 0 7.147-.648 1.17-.65 2.21-2.595 2.21-4.282 0-2.854-.52-3.243-4.16-3.114zM256.022 345.501c-1.95-1.816-2.47-1.816-4.029.13-.91 1.167-2.989 2.595-4.679 3.243-1.689.649-2.989 2.206-2.989 3.633 0 1.297-.78 3.114-1.819 4.022-1.04.778-1.56 2.335-1.17 3.373.39 1.038 1.3 1.817 2.21 1.817.78 0 2.599-1.817 4.028-3.893 1.43-2.076 3.64-3.892 4.809-3.892 1.17 0 2.34.779 2.73 1.557.389 1.297 1.169 1.297 2.988.26 1.43-.779 2.6-2.985 2.86-4.93.26-2.077-.26-3.374-1.17-3.374-.91 0-2.6-.908-3.77-1.946zM280.974 344.982c-3.379 0-6.758.39-7.667.778-1.17.39-1.3 1.298-.13 3.374.78 1.557 1.949 3.762 2.599 4.8.65 1.038 1.43 2.984 1.82 4.152.52 1.297 2.079 2.335 3.898 2.335 1.56 0 5.198-1.946 7.798-4.411 4.548-4.152 4.678-4.411 2.079-5.19-1.56-.519-3.119-2.076-3.509-3.503-.65-1.946-1.95-2.465-6.888-2.335zM238.217 376.12c-.65.13-2.08.389-3.249.778-1.3.26-2.339 1.168-2.339 1.817 0 .648.52 1.167 1.17 1.167.65 0 2.079.39 3.249.779 1.56.519 2.079 0 2.079-1.946 0-1.557-.39-2.595-.91-2.595zM297.999 410.63c-.65-.259-2.73.13-4.938 1.039-2.21 1.038-4.42 1.167-5.199.648-.78-.648-5.588-.519-11.047.13-5.198.779-10.656 1.038-12.086.649-1.3-.26-3.899-.13-5.588.519-2.34.908-3.12 2.205-3.12 5.06 0 3.373.52 4.022 4.29 4.67 2.209.39 8.317.779 13.255.779 5.069.13 10.917-.26 12.997-.779 2.209-.519 5.848-2.724 8.187-4.93 2.21-2.205 4.159-4.8 4.159-5.579 0-.908-.39-1.946-.91-2.205z' />
        </g>
        <path
          d='M98.626 1.157H0v203.387l6.497 1.427c3.639.778 7.277 1.427 8.187 1.427.78 0 3.378-1.816 5.717-4.151 3.508-3.373 5.458-4.151 11.565-4.67 6.757-.519 7.537-1.038 10.785-5.577 1.82-2.724 4.418-4.93 5.588-5.06 1.17 0 4.418-1.296 7.146-2.723 2.73-1.557 7.927-5.967 11.435-9.858l6.498-7.005 13.644-1.297c7.536-.778 14.293-1.556 14.943-1.945.78-.26 3.119-1.687 5.198-3.113 2.209-1.427 5.197-3.113 6.757-3.762 1.559-.778 3.768-2.983 4.808-5.059 1.04-2.075 4.028-5.577 6.627-7.912 2.598-2.205 5.977-4.021 7.536-4.021 1.56 0 4.808-1.816 7.147-3.892 2.34-2.205 4.938-5.577 5.718-7.523.78-1.945 1.559-4.28 1.819-5.188.13-.908 1.3-4.67 2.599-8.432 1.3-3.761 3.898-10.247 5.977-14.657 1.95-4.28 3.638-8.82 3.638-9.988 0-1.167 1.17-2.983 2.73-4.02 1.559-1.038 2.338-2.465 1.818-3.373-.52-.778.65-2.854 2.47-4.67 1.818-1.946 3.638-4.67 4.157-6.096.52-1.557 2.47-4.67 4.289-7.005 1.819-2.334 4.028-4.28 4.678-4.28.78 0 1.949-1.297 2.598-2.854.78-1.556 3.119-3.761 5.198-4.929l3.898-2.205.65-19.975c.39-11.026 1.17-20.754 1.69-21.662.649-.908 1.559-3.373 2.208-5.448l1.17-3.891H98.626z'
          fill='#FDFBF4'
        />
        <path
          d='M359.016.606C206.512.606 182.65.413 182 2.496c-.39 1.3 13.07 5.526 11.51 9.17-1.82 4.683-2.86 10.408-3.25 20.426-.39 9.368-.13 14.572.91 15.873.78 1.04 2.86 1.431 4.81 1.04 1.82-.26 3.64-1.43 4.031-2.341.39-1.04 1.43-1.822 2.47-1.822 1.04 0 2.47-1.17 3.38-2.602.91-1.43 2.21-2.602 2.99-2.602.78 0 4.811-1.821 8.972-3.903 4.03-2.212 7.93-3.643 8.58-3.253.65.39 3.64 0 6.761-.78 3.12-.781 11.051-1.692 17.812-1.952 7.41-.39 12.611-.13 13.001.65.52.781 2.73.911 5.98.13 4.291-1.04 5.591-.78 7.931 1.432 1.43 1.3 3.77 2.472 5.201 2.472 1.43 0 5.07 1.17 8.06 2.602 2.861 1.431 6.111 2.602 7.021 2.602.91 0 2.86.911 4.16 1.952 1.431 1.04 3.511 1.951 4.551 1.951 1.17 0 2.86 1.692 3.77 3.904 1.04 2.081 2.34 3.903 2.99 3.903.651 0 3.381 2.472 6.112 5.334 2.6 2.993 5.2 6.506 5.72 7.937.52 1.3 1.82 2.732 2.99 3.122 1.04.52 1.95 1.301 1.95 1.952 0 .65 3.77 5.074 8.321 9.628 7.151 7.286 8.971 8.457 13.002 8.457 2.73 0 7.28 1.561 11.31 4.033 3.771 2.212 9.102 4.164 11.832 4.424 2.73.26 5.46.78 6.24 1.301.65.39 1.3 1.431 1.3 2.082 0 .78 1.56 3.383 3.64 5.855 1.951 2.341 4.161 4.423 4.811 4.423.78 0 3.77 2.342 6.891 5.205 2.99 2.862 5.46 5.464 5.46 5.854 0 .26 1.3 1.952 2.99 3.773 1.561 1.692 3.511 3.904 4.291 4.945.91.91 3.38 3.252 5.72 5.204 2.341 2.082 5.201 3.643 6.631 3.643 1.3 0 2.86 1.04 3.51 2.212.91 1.561 3.511 2.342 9.362 2.732 4.42.39 9.23 0 10.79-.78 1.56-.781 6.371-1.822 10.662-2.213 4.29-.39 10.14-.78 13.001-1.04 2.86-.13 7.28-1.041 9.881-1.952 3.64-1.301 7.8-1.301 18.202-.39 11.18 1.04 13.781.91 15.601-.65 1.04-.912 2.6-1.822 3.38-1.822.78 0 2.239-1.33 2.759-2.37.39-1.042.232-30.808.232-66.587V.606H359.016z'
          fill='#DDE4EE'
        />
        <path
          d='M332.913 254.872c-2.469-2.205-2.599-2.075-4.678 1.946-1.17 2.334-2.08 4.41-2.08 4.67 0 .129.78.388 1.69.388.78 0 2.859-1.037 4.548-2.334 2.989-2.335 2.989-2.335.52-4.67zM312.512 254.094c-.39 0-.65.26-.65.648 0 .39.26.649.65.649s.65-.26.65-.649-.26-.648-.65-.648zM306.924 255.39c-.52 0-2.988 1.557-5.327 3.503l-4.288 3.632 7.276.13 7.147.259-1.949-3.762c-1.04-2.075-2.339-3.761-2.859-3.761zM199.332 264.47c-.26 0-.52.52-.52 1.298 0 .648.65 1.297 1.43 1.297.65 0 .91-.649.52-1.297-.39-.779-1.04-1.297-1.43-1.297zM217.524 267.454c-.65-.26-1.69 0-2.21.389-.519.519-.909 1.816-.909 2.724 0 1.038 1.04 1.686 2.34 1.427 1.169-.26 2.208-1.297 2.208-2.205 0-1.038-.65-2.076-1.43-2.335zM192.705 268.362c-.91 0-2.21 1.167-2.989 2.464-.65 1.427-.78 2.854-.26 3.243.65.39 3.769 1.038 6.887 1.557l5.718.908-3.769-4.151c-2.209-2.205-4.548-4.021-5.587-4.021zM303.806 370.964c-.91 0-5.848.908-11.045 1.816-5.068.908-9.746 1.945-10.396 2.334-.65.39-5.587 1.297-11.045 2.076-6.107.908-12.344.908-15.983.26-3.378-.65-8.446-.78-11.175-.52-2.729.39-5.068 1.168-5.068 1.557 0 .519 2.21 1.946 4.938 3.113 2.6 1.167 7.407 2.724 10.655 3.372 3.25.779 8.317 1.427 11.435 1.427 2.99 0 5.458-.648 5.458-1.297 0-.778 3.379-1.297 7.537-1.427 5.977 0 9.096-.908 16.372-4.929 5.068-2.724 9.356-5.577 9.616-6.356.26-.908-.26-1.556-1.3-1.426z'
          fill='#B3A980'
        />
      </g>
    </svg>
  );
};

export const Avatar: FC<AvatarProps & JSX.IntrinsicElements['div']> = ({ size = 64, ...props }) => (
  <div
    {...props}
    sx={{
      width: size,
      height: size,
      borderRadius: 9999,
    }}
  >
    <IfiokJrLogo size={size} sx={{ borderRadius: '100%' }} />
  </div>
);

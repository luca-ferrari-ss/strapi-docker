import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    index: Attribute.Boolean & Attribute.DefaultTo<true>;
    follow: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementsVideo extends Schema.Component {
  collectionName: 'components_elements_videos';
  info: {
    displayName: 'Video';
    description: '';
    icon: 'play';
  };
  attributes: {
    autoplay: Attribute.Boolean & Attribute.DefaultTo<false>;
    poster: Attribute.Media<'images'>;
    media: Attribute.Media<'videos'>;
  };
}

export interface ElementsTitleTextText extends Schema.Component {
  collectionName: 'components_elements_title_text_texts';
  info: {
    displayName: 'Title text text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text1: Attribute.Blocks;
    text2: Attribute.Blocks;
  };
}

export interface ElementsText extends Schema.Component {
  collectionName: 'components_elements_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ElementsTextTextTitle extends Schema.Component {
  collectionName: 'components_elements_text_text_titles';
  info: {
    displayName: 'Text text title';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text1: Attribute.Blocks;
    text2: Attribute.Blocks;
  };
}

export interface ElementsTextMultimedia extends Schema.Component {
  collectionName: 'components_elements_text_multimedias';
  info: {
    displayName: 'Title text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    text: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsTeamCard extends Schema.Component {
  collectionName: 'components_elements_team_cards';
  info: {
    displayName: 'Team card';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    name: Attribute.Blocks;
    textHover: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsTableRow extends Schema.Component {
  collectionName: 'components_elements_table_rows';
  info: {
    displayName: 'Table row';
    icon: 'bulletList';
  };
  attributes: {
    textLeft: Attribute.String;
    textRight: Attribute.String;
    link: Attribute.Component<'elements.link'>;
    multimediaHover: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsTab extends Schema.Component {
  collectionName: 'components_elements_tabs';
  info: {
    displayName: 'Tab';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ElementsMultimedia extends Schema.Component {
  collectionName: 'components_elements_multimedia';
  info: {
    displayName: 'Multimedia';
    description: '';
    icon: 'landscape';
  };
  attributes: {
    internalTitle: Attribute.String;
    desktopImage: Attribute.Component<'elements.image'>;
    mobileImage: Attribute.Component<'elements.image'>;
    showVideo: Attribute.Boolean & Attribute.DefaultTo<false>;
    desktopVideo: Attribute.Component<'elements.video'>;
    mobileVideo: Attribute.Component<'elements.video'>;
  };
}

export interface ElementsMultimediaText extends Schema.Component {
  collectionName: 'components_elements_multimedia_texts';
  info: {
    displayName: 'Multimedia text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    text: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsLink extends Schema.Component {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
    description: '';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    url: Attribute.String;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ElementsLinkMultimediaTextTitle extends Schema.Component {
  collectionName: 'components_elements_link_multimedia_text_titles';
  info: {
    displayName: 'Link multimedia text title';
    icon: 'feather';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsLinkImage extends Schema.Component {
  collectionName: 'components_elements_link_images';
  info: {
    displayName: 'Link image';
    description: '';
    icon: 'link';
  };
  attributes: {
    link: Attribute.Component<'elements.link'>;
    image: Attribute.Component<'elements.image'>;
  };
}

export interface ElementsLinkDropdown extends Schema.Component {
  collectionName: 'components_elements_link_dropdowns';
  info: {
    displayName: 'Link dropdown';
    description: '';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.Component<'elements.link-image', true>;
  };
}

export interface ElementsImage extends Schema.Component {
  collectionName: 'components_elements_images';
  info: {
    displayName: 'Image';
    description: '';
    icon: 'picture';
  };
  attributes: {
    media: Attribute.Media<'images'>;
    alt: Attribute.String;
  };
}

export interface ElementsImageTitleText extends Schema.Component {
  collectionName: 'components_elements_image_title_texts';
  info: {
    displayName: 'Image title text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'elements.image'>;
    title: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ElementsImageTextTitle extends Schema.Component {
  collectionName: 'components_elements_image_text_titles';
  info: {
    displayName: 'Image text title';
    icon: 'feather';
    description: '';
  };
  attributes: {
    image: Attribute.Component<'elements.image'>;
    title: Attribute.String;
    text: Attribute.Blocks;
  };
}

export interface ElementsImageLink extends Schema.Component {
  collectionName: 'components_elements_image-links';
  info: {
    displayName: 'Image link';
    description: '';
    icon: 'link';
  };
  attributes: {
    internalTitle: Attribute.String;
    link: Attribute.Component<'elements.link'>;
    image: Attribute.Component<'elements.image'>;
  };
}

export interface ElementsHotspot extends Schema.Component {
  collectionName: 'components_elements_hotspots';
  info: {
    displayName: 'Hotspot';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    xCoordinates: Attribute.Float;
    yCoordinates: Attribute.Float;
    text: Attribute.Blocks;
  };
}

export interface ElementsDropdownLink extends Schema.Component {
  collectionName: 'components_elements_dropdown_links';
  info: {
    displayName: 'Drowpdown link';
    description: '';
    icon: 'link';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.Component<'elements.image-link', true>;
  };
}

export interface ElementsDownloadFile extends Schema.Component {
  collectionName: 'components_elements_download_files';
  info: {
    displayName: 'Download file';
    icon: 'attachment';
  };
  attributes: {
    name: Attribute.String;
    file: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    text: Attribute.Blocks;
    chipPosition: Attribute.Enumeration<['BottomRight', 'TopLeft']>;
    chip: Attribute.String;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
    multimediaHover: Attribute.Component<'elements.multimedia'>;
  };
}

export interface ElementsAnchorItem extends Schema.Component {
  collectionName: 'components_elements_anchor-item';
  info: {
    displayName: 'Anchor item';
    description: '';
    icon: 'hashtag';
  };
  attributes: {
    text: Attribute.String;
    anchorId: Attribute.String;
  };
}

export interface BlocksVerticalTabs extends Schema.Component {
  collectionName: 'components_blocks_vertical_tabs';
  info: {
    displayName: 'Vertical tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.Blocks;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksVenuesSlider extends Schema.Component {
  collectionName: 'components_blocks_venues_sliders';
  info: {
    displayName: 'Venues slider';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    cardsTextColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
  };
}

export interface BlocksTwoMediaText extends Schema.Component {
  collectionName: 'components_blocks_two_media_texts';
  info: {
    displayName: 'Two media text';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    spaceBetweenColumns: Attribute.Boolean & Attribute.DefaultTo<true>;
    title: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTwoMediaMasonry extends Schema.Component {
  collectionName: 'components_blocks_two_media_masonry';
  info: {
    displayName: 'Two media masonry';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    multimediaLeft: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    multimediaRight: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksTwoMediaMasonryText extends Schema.Component {
  collectionName: 'components_blocks_two_media_masonry_texts';
  info: {
    displayName: 'Two media masonry text';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTwoColumnsCards extends Schema.Component {
  collectionName: 'components_elements_two_columns_cards';
  info: {
    displayName: 'Two columns cards';
    icon: 'grid';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'elements.card', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksTitle extends Schema.Component {
  collectionName: 'components_blocks_titles';
  info: {
    displayName: 'Title';
    description: '';
    icon: 'feather';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.DefaultTo<'Left'>;
    text: Attribute.Blocks;
  };
}

export interface BlocksThreeColumnsCards extends Schema.Component {
  collectionName: 'components_blocks_three_columns_cards';
  info: {
    displayName: 'Three columns cards';
    icon: 'apps';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'elements.card', true> &
      Attribute.SetMinMax<
        {
          min: 3;
          max: 3;
        },
        number
      >;
  };
}

export interface BlocksText extends Schema.Component {
  collectionName: 'components_blocks_texts';
  info: {
    displayName: 'Text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    alignment: Attribute.Enumeration<['left', 'center', 'right']> &
      Attribute.DefaultTo<'left'>;
    text: Attribute.Blocks;
  };
}

export interface BlocksText04 extends Schema.Component {
  collectionName: 'components_blocks_text_04s';
  info: {
    displayName: 'Text 04';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    iconsTexts: Attribute.Component<'elements.image-text-title', true>;
  };
}

export interface BlocksText03 extends Schema.Component {
  collectionName: 'components_blocks_text_03s';
  info: {
    displayName: 'Text 03';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    sectionTitleColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    sectionTitle: Attribute.String;
    texts: Attribute.Component<'elements.text-text-title', true>;
  };
}

export interface BlocksText02 extends Schema.Component {
  collectionName: 'components_blocks_text_02s';
  info: {
    displayName: 'Text 02';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    texts: Attribute.Component<'elements.text', true>;
  };
}

export interface BlocksText01 extends Schema.Component {
  collectionName: 'components_blocks_text_01s';
  info: {
    displayName: 'Text 01';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.DefaultTo<'Left'>;
    sectionTitleColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    icon: Attribute.Component<'elements.image'>;
    sectionTitle: Attribute.String;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksTable extends Schema.Component {
  collectionName: 'components_blocks_tables';
  info: {
    displayName: 'Table';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    rows: Attribute.Component<'elements.table-row', true>;
  };
}

export interface BlocksSpacer extends Schema.Component {
  collectionName: 'components_blocks_spacers';
  info: {
    displayName: 'Spacer';
    icon: 'filter';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    pxDesktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    pxMobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
  };
}

export interface BlocksSliderTeamCards extends Schema.Component {
  collectionName: 'components_blocks_slider_team_cards';
  info: {
    displayName: 'Slider team cards';
    icon: 'arrowRight';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    cards: Attribute.Component<'elements.team-card', true> &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface BlocksSlider01 extends Schema.Component {
  collectionName: 'components_blocks_slider_01s';
  info: {
    displayName: 'Slider 01';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    cardsTextColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    card: Attribute.Component<'elements.multimedia-text', true>;
  };
}

export interface BlocksSingleMedia extends Schema.Component {
  collectionName: 'components_blocks_single_media';
  info: {
    displayName: 'Single media';
    icon: 'picture';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    fullWidth: Attribute.Boolean & Attribute.DefaultTo<false>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksSingleMediaText extends Schema.Component {
  collectionName: 'components_blocks_single_media_texts';
  info: {
    displayName: 'Single media text';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksQuote extends Schema.Component {
  collectionName: 'components_blocks_quotes';
  info: {
    displayName: 'Quote';
    icon: 'quote';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Text;
    subtext: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksQuoteMedia extends Schema.Component {
  collectionName: 'components_blocks_quote_media';
  info: {
    displayName: 'Quote media';
    icon: 'quote';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    text: Attribute.Text;
    subtext: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksProjectsList extends Schema.Component {
  collectionName: 'components_blocks_projects_lists';
  info: {
    displayName: 'Projects list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksProjectInfo extends Schema.Component {
  collectionName: 'components_blocks_project_infos';
  info: {
    displayName: 'Project info';
    icon: 'bulletList';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksMediaText extends Schema.Component {
  collectionName: 'components_blocks_media_texts';
  info: {
    displayName: 'Media text';
    icon: 'quote';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksMedia04 extends Schema.Component {
  collectionName: 'components_blocks_media_04s';
  info: {
    displayName: 'Media 04';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          min: 2;
          max: 2;
        },
        number
      >;
  };
}

export interface BlocksMedia03 extends Schema.Component {
  collectionName: 'components_blocks_media_03s';
  info: {
    displayName: 'Media 03';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    linkColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksMedia02 extends Schema.Component {
  collectionName: 'components_blocks_media_02s';
  info: {
    displayName: 'Media 02';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksMedia01 extends Schema.Component {
  collectionName: 'components_blocks_media_01s';
  info: {
    displayName: 'Media 01';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksMaterialsList extends Schema.Component {
  collectionName: 'components_blocks_materials_lists';
  info: {
    displayName: 'Materials list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksMasonryGallery extends Schema.Component {
  collectionName: 'components_blocks_masonry_galleries';
  info: {
    displayName: 'Masonry gallery';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean;
    multimedia: Attribute.Component<'elements.multimedia', true> &
      Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
  };
}

export interface BlocksMarqueeText extends Schema.Component {
  collectionName: 'components_blocks_marquee_texts';
  info: {
    displayName: 'Marquee text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean;
    text: Attribute.String;
  };
}

export interface BlocksJournalList extends Schema.Component {
  collectionName: 'components_blocks_journal_lists';
  info: {
    displayName: 'Journal list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksHotspotImage extends Schema.Component {
  collectionName: 'components_blocks_hotspot_images';
  info: {
    displayName: 'Hotspot image';
    icon: 'chartBubble';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
    desktopImage: Attribute.Component<'elements.image'>;
    desktopHotspots: Attribute.Component<'elements.hotspot', true>;
    mobileImage: Attribute.Component<'elements.image'>;
    mobileHotspots: Attribute.Component<'elements.hotspot', true>;
  };
}

export interface BlocksHorizontalTabs extends Schema.Component {
  collectionName: 'components_blocks_horizontal_tabs';
  info: {
    displayName: 'Horizontal tabs';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.Blocks;
    tabs: Attribute.Component<'elements.tab', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksHero01 extends Schema.Component {
  collectionName: 'components_blocks_hero_01s';
  info: {
    displayName: 'Hero 01';
    icon: 'star';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksHeadlineText extends Schema.Component {
  collectionName: 'components_blocks_headline_texts';
  info: {
    displayName: 'Headline text';
    icon: 'feather';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    headline: Attribute.Blocks;
    text: Attribute.Blocks;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksGrid01 extends Schema.Component {
  collectionName: 'components_blocks_grid_01s';
  info: {
    displayName: 'Grid 01';
    icon: 'grid';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    cardsTextColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    cardsBackgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    card: Attribute.Component<'elements.multimedia-text', true>;
  };
}

export interface BlocksForm extends Schema.Component {
  collectionName: 'components_blocks_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Blocks;
  };
}

export interface BlocksForm02 extends Schema.Component {
  collectionName: 'components_blocks_form_02s';
  info: {
    displayName: 'Form 02';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    text: Attribute.Blocks;
  };
}

export interface BlocksForm01 extends Schema.Component {
  collectionName: 'components_blocks_form_01s';
  info: {
    displayName: 'Form 01';
    icon: 'envelop';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    text: Attribute.Blocks;
  };
}

export interface BlocksDownloadSingle extends Schema.Component {
  collectionName: 'components_blocks_download_singles';
  info: {
    displayName: 'Download single';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    downloadFile: Attribute.Component<'elements.download-file'> &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksDownloadProducts extends Schema.Component {
  collectionName: 'components_blocks_download_products';
  info: {
    displayName: 'Download products';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

export interface BlocksDownloadProductFiles extends Schema.Component {
  collectionName: 'components_blocks_download_product_files';
  info: {
    displayName: 'Download product files';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

export interface BlocksDownloadDocuments extends Schema.Component {
  collectionName: 'components_blocks_download_documents';
  info: {
    displayName: 'Download documents';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    title: Attribute.String;
  };
}

export interface BlocksDesignersList extends Schema.Component {
  collectionName: 'components_blocks_designers_lists';
  info: {
    displayName: 'Designers list';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    loadMoreText: Attribute.String;
  };
}

export interface BlocksContent04 extends Schema.Component {
  collectionName: 'components_blocks_content_04s';
  info: {
    displayName: 'Content 04';
    icon: 'write';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    sectionTitleColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Orange'>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    cardsTextColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    cardsBackgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Light green'>;
    sectionTitle: Attribute.String;
    text: Attribute.Blocks;
    cards: Attribute.Component<'elements.link-multimedia-text-title'>;
  };
}

export interface BlocksContent03 extends Schema.Component {
  collectionName: 'components_blocks_content_03s';
  info: {
    displayName: 'Content 03';
    icon: 'write';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    text: Attribute.Blocks;
    logo: Attribute.Component<'elements.image'>;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksContent02 extends Schema.Component {
  collectionName: 'components_blocks_content_02s';
  info: {
    displayName: 'Content 02';
    icon: 'write';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    textMultimedia: Attribute.Component<'elements.multimedia-text'>;
  };
}

export interface BlocksContent01 extends Schema.Component {
  collectionName: 'components_blocks_content_01s';
  info: {
    displayName: 'Content 01';
    icon: 'write';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    reverseColumnsOrder: Attribute.Boolean & Attribute.DefaultTo<false>;
    textColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    text: Attribute.Blocks;
    multimedia: Attribute.Component<'elements.multimedia'>;
  };
}

export interface BlocksButton extends Schema.Component {
  collectionName: 'components_blocks_buttons';
  info: {
    displayName: 'Button';
    icon: 'link';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    link: Attribute.Component<'elements.link'>;
  };
}

export interface BlocksBreadcrumbs extends Schema.Component {
  collectionName: 'components_blocks_breadcrumbs';
  info: {
    displayName: 'Breadcrumbs';
    icon: 'stack';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    links: Attribute.Component<'elements.link', true>;
  };
}

export interface BlocksAnchor extends Schema.Component {
  collectionName: 'components_blocks_anchors';
  info: {
    displayName: 'Anchor';
    icon: 'hashtag';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface BlocksAnchorMenu extends Schema.Component {
  collectionName: 'components_blocks_anchor_menus';
  info: {
    displayName: 'Anchor menu';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    anchors: Attribute.Component<'elements.anchor-item', true>;
  };
}

export interface BlocksAgendaSlider extends Schema.Component {
  collectionName: 'components_blocks_agenda_sliders';
  info: {
    displayName: 'Agenda slider';
    icon: 'arrowRight';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Orange'>;
    cardsTextColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    cardsBackgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
  };
}

export interface BlocksAgendaGrid extends Schema.Component {
  collectionName: 'components_blocks_agenda_grids';
  info: {
    displayName: 'Agenda grid';
    icon: 'grid';
    description: '';
  };
  attributes: {
    internalTitle: Attribute.String;
    blockId: Attribute.String;
    hide: Attribute.Boolean & Attribute.DefaultTo<false>;
    backgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    cardsTextColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Green'>;
    cardsBackgroundColor: Attribute.Enumeration<
      ['Green', 'Light green', 'Yellow', 'Black', 'Orange']
    > &
      Attribute.DefaultTo<'Yellow'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.seo': SharedSeo;
      'elements.video': ElementsVideo;
      'elements.title-text-text': ElementsTitleTextText;
      'elements.text': ElementsText;
      'elements.text-text-title': ElementsTextTextTitle;
      'elements.text-multimedia': ElementsTextMultimedia;
      'elements.team-card': ElementsTeamCard;
      'elements.table-row': ElementsTableRow;
      'elements.tab': ElementsTab;
      'elements.multimedia': ElementsMultimedia;
      'elements.multimedia-text': ElementsMultimediaText;
      'elements.link': ElementsLink;
      'elements.link-multimedia-text-title': ElementsLinkMultimediaTextTitle;
      'elements.link-image': ElementsLinkImage;
      'elements.link-dropdown': ElementsLinkDropdown;
      'elements.image': ElementsImage;
      'elements.image-title-text': ElementsImageTitleText;
      'elements.image-text-title': ElementsImageTextTitle;
      'elements.image-link': ElementsImageLink;
      'elements.hotspot': ElementsHotspot;
      'elements.dropdown-link': ElementsDropdownLink;
      'elements.download-file': ElementsDownloadFile;
      'elements.card': ElementsCard;
      'elements.anchor-item': ElementsAnchorItem;
      'blocks.vertical-tabs': BlocksVerticalTabs;
      'blocks.venues-slider': BlocksVenuesSlider;
      'blocks.two-media-text': BlocksTwoMediaText;
      'blocks.two-media-masonry': BlocksTwoMediaMasonry;
      'blocks.two-media-masonry-text': BlocksTwoMediaMasonryText;
      'blocks.two-columns-cards': BlocksTwoColumnsCards;
      'blocks.title': BlocksTitle;
      'blocks.three-columns-cards': BlocksThreeColumnsCards;
      'blocks.text': BlocksText;
      'blocks.text-04': BlocksText04;
      'blocks.text-03': BlocksText03;
      'blocks.text-02': BlocksText02;
      'blocks.text-01': BlocksText01;
      'blocks.table': BlocksTable;
      'blocks.spacer': BlocksSpacer;
      'blocks.slider-team-cards': BlocksSliderTeamCards;
      'blocks.slider-01': BlocksSlider01;
      'blocks.single-media': BlocksSingleMedia;
      'blocks.single-media-text': BlocksSingleMediaText;
      'blocks.quote': BlocksQuote;
      'blocks.quote-media': BlocksQuoteMedia;
      'blocks.projects-list': BlocksProjectsList;
      'blocks.project-info': BlocksProjectInfo;
      'blocks.media-text': BlocksMediaText;
      'blocks.media-04': BlocksMedia04;
      'blocks.media-03': BlocksMedia03;
      'blocks.media-02': BlocksMedia02;
      'blocks.media-01': BlocksMedia01;
      'blocks.materials-list': BlocksMaterialsList;
      'blocks.masonry-gallery': BlocksMasonryGallery;
      'blocks.marquee-text': BlocksMarqueeText;
      'blocks.journal-list': BlocksJournalList;
      'blocks.hotspot-image': BlocksHotspotImage;
      'blocks.horizontal-tabs': BlocksHorizontalTabs;
      'blocks.hero': BlocksHero;
      'blocks.hero-01': BlocksHero01;
      'blocks.headline-text': BlocksHeadlineText;
      'blocks.grid-01': BlocksGrid01;
      'blocks.form': BlocksForm;
      'blocks.form-02': BlocksForm02;
      'blocks.form-01': BlocksForm01;
      'blocks.download-single': BlocksDownloadSingle;
      'blocks.download-products': BlocksDownloadProducts;
      'blocks.download-product-files': BlocksDownloadProductFiles;
      'blocks.download-documents': BlocksDownloadDocuments;
      'blocks.designers-list': BlocksDesignersList;
      'blocks.content-04': BlocksContent04;
      'blocks.content-03': BlocksContent03;
      'blocks.content-02': BlocksContent02;
      'blocks.content-01': BlocksContent01;
      'blocks.button': BlocksButton;
      'blocks.breadcrumbs': BlocksBreadcrumbs;
      'blocks.anchor': BlocksAnchor;
      'blocks.anchor-menu': BlocksAnchorMenu;
      'blocks.agenda-slider': BlocksAgendaSlider;
      'blocks.agenda-grid': BlocksAgendaGrid;
    }
  }
}

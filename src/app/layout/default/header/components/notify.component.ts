import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import * as distanceInWordsToNow from 'date-fns/distance_in_words_to_now';
import { NzMessageService } from 'ng-zorro-antd';
import { NoticeItem, NoticeIconList } from '@delon/abc';

@Component({
  selector: 'header-notify',
  template: `
    <notice-icon
      [data]="data"
      [count]="count"
      [loading]="loading"
      btnClass="alain-default__nav-item"
      btnIconClass="alain-default__nav-item-icon"
      (select)="select($event)"
      (clear)="clear($event)"
      (popoverVisibleChange)="loadData()"
    ></notice-icon>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderNotifyComponent {
  data: NoticeItem[] = [
    {
      title: 'Drielel',
      list: [],
      emptyText: 'Lorem Ipsum',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg',
      clearText: 'Lorem Ipsum',
    },
    {
      title: '消息',
      list: [],
      emptyText: 'Lorem Ipsum',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg',
      clearText: 'Lorem Ipsum',
    },
    {
      title: '待办',
      list: [],
      emptyText: 'Lorem Ipsum',
      emptyImage: 'https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg',
      clearText: 'Lorem Ipsum',
    },
  ];
  count = 5;
  loading = false;

  constructor(private msg: NzMessageService, private cdr: ChangeDetectorRef) {}

  private updateNoticeData(notices: NoticeIconList[]): NoticeItem[] {
    const data = this.data.slice();
    data.forEach(i => (i.list = []));

    notices.forEach(item => {
      const newItem = { ...item };
      if (newItem.datetime)
        // tslint:disable-next-line: no-non-null-assertion
        newItem.datetime = distanceInWordsToNow(item.datetime!, {
          locale: (window as any).__locale__,
        });
      if (newItem.extra && newItem.status) {
        newItem.color = {
          todo: undefined,
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newItem.status];
      }
      // tslint:disable-next-line: no-non-null-assertion
      data.find(w => w.title === newItem.type)!.list.push(newItem);
    });
    return data;
  }

  loadData() {
    if (this.loading) return;
    this.loading = true;
    setTimeout(() => {
      this.data = this.updateNoticeData([
        {
          id: '000000001',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: 'lkjdf',
          datetime: '2017-08-09',
          type: '通知',
        },
        {
          id: '000000002',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
          title: 'More',
          datetime: '2017-08-08',
          type: 'l;kadjsf',
        },
        {
          id: '000000003',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
          title: 'Lorem',
          datetime: '2017-08-07',
          read: true,
          type: 'lorem',
        },
        {
          id: '000000004',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
          title: 'lorem',
          datetime: '2017-08-07',
          type: 'lorem',
        },
        {
          id: '000000005',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
          title: 'lorem',
          datetime: '2017-08-07',
          type: '通知',
        },
        {
          id: '000000006',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: 'lorem lorem',
          description: 'lorem',
          datetime: '2017-08-07',
          type: 'lorem',
        },
        {
          id: '000000007',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: 'lorem ipsume',
          description: 'What is going on ?',
          datetime: '2017-08-07',
          type: 'Sup',
        },
        {
          id: '000000008',
          avatar: 'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
          title: 'Message',
          description: 'Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum',
          datetime: '2017-08-07',
          type: 'Was',
        },
        {
          id: '000000009',
          title: 'Washington',
          description: 'This is a description',
          extra: 'Okek',
          status: 'todo',
          type: 'datee',
        },
        {
          id: '000000010',
          title: 'Of cource',
          description: 'Text',
          extra: 'Lorem Ip',
          status: 'urgent',
          type: 'IP',
        },
        {
          id: '000000011',
          title: 'WElsxjd',
          description: 'Drive',
          extra: 'MOre',
          status: 'doing',
          type: 'OUU',
        },
        {
          id: '000000012',
          title: 'ABCD 版本发布',
          description: 'Driping',
          extra: 'coffee',
          status: 'processing',
          type: 'andj',
        },
      ]);
      this.loading = false;
      this.cdr.detectChanges();
    }, 1000);
  }

  clear(type: string) {
    this.msg.success(`Empty ${type}`);
  }

  select(res: any) {
    this.msg.success(`Click ${res.title} 的 ${res.item.title}`);
  }
}

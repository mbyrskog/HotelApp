import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservationFormComponent } from './reservation-form.component';
import { ActivatedRoute } from '@angular/router';
import { ReservationListComponent } from '../reservation-list/reservation-list.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ReservationFormComponent', () => {
  let component: ReservationFormComponent;
  let fixture: ComponentFixture<ReservationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
      declarations: [
        ReservationFormComponent,
        ReservationListComponent,
        HeaderComponent,
        HomeComponent,
        FooterComponent,
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  if (key === 'id') return '123';
                  return null;
                },
              },
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(ReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
